import '../src/index.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Question_2() {
  return (
    <>
      <Container className="my-2">
        <h1 className="text-center mb-3 fw-bold">JavaScript Output Methods in React.js</h1>

        <div className="method-example">
          <h2>1. JSX Expression Output</h2>
          <p>You can directly output data using JSX expressions within curly braces <code>{`{ }`}</code>.</p>
          <code>{`const name = 'John Doe';`}<br />{`return <h1>Hello, {name}</h1>;`}</code>
        </div>

        <div className="method-example">
          <h2>2. Component Output</h2>
          <p>You can create functional or class components to output structured content or dynamic data.</p>
          <code>{`function Greeting(props) {`}<br />{`  return <h1>Hello, {props.name}</h1>;`}<br />{`}`}<br />{`// Usage: <Greeting name="John Doe" />`}</code>
        </div>

        <div className="method-example">
          <h2>3. alert()</h2>
          <p>The <code>alert()</code> method displays an alert box with a specified message and an OK button.</p>
          <code>
            {`alert('This is an alert message!');`}
          </code>
        </div>

        <div className="method-example">
          <h2>4. console.log()</h2>
          <p>The <code>console.log()</code> method outputs a message to the web console, often used for debugging purposes.</p>
          <code>
            {`console.log("This is a console log message");`}
          </code>
        </div>

        <div className="method-example">
          <h2>5. document.write()</h2>
          <p>The <code>document.write()</code> method writes a string of text directly to the HTML document. Note that this method should be used cautiously, as it can overwrite the entire document content if used after the document has loaded.</p>
          <code>
            {`document.write('This is written using document.write()');`}
          </code>
        </div>

        <div className="method-example">
          <h2>6. innerHTML</h2>
          <p>The <code>innerHTML</code> property sets or returns the HTML content (inner HTML) of an element.</p>
          <code>
            {`document.getElementById('dynamicContent').innerHTML = 'This is dynamic content';`}
          </code>
        </div>

        <div id="dynamicContent" style={{ marginTop: '20px', fontSize: '18px', color: 'blue' }}></div>

        <div className="d-flex justify-content-between align-items-center container">
          <Link to="/question-1">
            <button className='btn btn-lg btn-dark text-light fw-semibold'>prev</button>
          </Link>
          <Link to="/question-3">
            <button className='btn btn-lg btn-dark text-light fw-semibold'>next</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
