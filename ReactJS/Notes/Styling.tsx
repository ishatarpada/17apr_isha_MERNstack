/* Styles in React =>  inline 
                    internal
                    external */
                    
/* 1. Inline CSS => Directly applied within the style attribute of elements. Best for quick, specific styles.
 */
example: - 
                    
<h1 style={{color : "red"}}></h1>

/* 2. Internal Css => Defined within a <style>
  tag inside the component or HTML. Useful for component-specific styles. */

  exapmle :- 

  function App() {
  return (
    <div>
      <style>
        {`
          .header {
            color: blue;
            font-size: 32px;
          }
          .text {
            color: green;
          }
        `}
      </style>
      <h1 className="header">Welcome to My App</h1>
      <p className="text">This is some text.</p>
    </div>
  );
}



/* 3. External CSS => Stored in separate .css files and imported into components. Ideal for larger projects and maintaining organized styles.

Create a CSS file (styles.css): */

/* styles.css */
.header {
color: blue;
font-size: 32px;
}
.text {
color: green;
}

// Import and use the CSS file in your React component:

import './styles.css';

function App() {
return (
<div>
  <h1 className="header">Welcome to My App</h1>
  <p className="text">This is some text.</p>
</div>
);
}