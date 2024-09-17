import React, { useState } from 'react';

const Accordion = () => {
  // Step 1: Manage the state to track which accordion is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Data for the accordion
  const accordionData = [
    { title: "What is Your Return Policy ?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus vel, repellat nisi eum rerum ullam quasi eos totam nostrum." },
    { title: "How Do Track My Order ?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus vel, repellat nisi eum rerum ullam quasi eos totam nostrum." },
    { title: "can I purches Item Again?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus vel, repellat nisi eum rerum ullam quasi eos totam nostrum." }
  ];

  // Step 2: Handle click on the accordion title to toggle visibility
  const handleAccordionClick = (index) => {
    const element = document.getElementById(`accordion-body-${index}`);

    if (element) { // Check if the element exists
      if (activeIndex === index) {
        // Hide the currently active accordion
        element.style.display = "none";
        setActiveIndex(null);
      } else {
        // Show the clicked accordion and hide the previous one
        if (activeIndex !== null) {
          const previousElement = document.getElementById(`accordion-body-${activeIndex}`);
          if (previousElement) {
            previousElement.style.display = "none";
          }
        }
        element.style.display = "block";
        setActiveIndex(index);
      }
    }

    console.log(`Accordion ${index + 1} clicked`);
  };

  return (
    <div className="max-w-md mx-auto font-serif">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item mb-4">
          {/* Step 3: Display accordion title */}
          <div
            className="accordion-header cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg flex justify-between items-center"
            onClick={() => handleAccordionClick(index)}
          >
            <p>{item.title}</p>
            <i className={`bi ${activeIndex === index ? 'bi-caret-down-fill' : 'bi-caret-right-fill'}`}></i>
          </div>

          {/* Step 4: Render the accordion body with initial display: none */}
          <div
            id={`accordion-body-${index}`}
            className="accordion-body p-4 bg-white border border-t-0 rounded-b-lg"
            style={{ display: 'none' }} // Initial state is hidden
          >
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
