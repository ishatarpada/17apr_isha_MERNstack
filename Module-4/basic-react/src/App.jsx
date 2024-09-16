import React from 'react';

export default function App() {
  const cars = ['bmw', 'audi', 'ford'];
  return (
    <>
      <ul>
        {cars.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </>
  );
}
