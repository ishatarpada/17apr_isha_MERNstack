import '../src/index.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Question_3() {
  function showAlert() {
    alert('This is an alert message!');
  }

  function showConsoleLog() {
    console.log('This is a console log message');
  }

  function useDocumentWrite() {
    document.write('This is written using document.write()');
  }

  function useInnerHTML() {
    document.getElementById('myDiv').innerHTML = 'This is dynamic content';
  }

  return (
    <>
      <Container className="my-2">
        <h1 className="text-center mb-3 fw-bold">Used JavaScript Output Method in React.js</h1>
        <div className="method-example">
          <h2>1. alert()</h2>
          <p>The <code>alert()</code> method displays an alert box with a specified message and an OK button.</p>
          <button className="btn btn-secondary" onClick={showAlert}>Show Alert</button>
          <code>
            {`alert('This is an alert message!');`}
          </code>
        </div>

        <div className="method-example">
          <h2>2. console.log()</h2>
          <p>The <code>console.log()</code> method outputs a message to the web console, often used for debugging purposes.</p>
          <button className="btn btn-secondary" onClick={showConsoleLog}>Show Console Log</button>
          <code>
            {`console.log("This is a console log message");`}
          </code>
        </div>

        <div className="method-example">
          <h2>3. document.write()</h2>
          <p>The <code>document.write()</code> method writes a string of text directly to the HTML document. Note that this method should be used cautiously, as it can overwrite the entire document content if used after the document has loaded.</p>
          <button className="btn btn-secondary" onClick={useDocumentWrite}>Use document.write()</button>
          <code>
            {`document.write('This is written using document.write()');`}
          </code>
        </div>

        <div className="method-example">
          <h2>4. innerHTML</h2>
          <p>The <code>innerHTML</code> property sets or returns the HTML content (inner HTML) of an element.</p>
          <button className="btn btn-secondary" onClick={useInnerHTML}>Use innerHTML</button>
          <div id="myDiv">Original content.</div>
          <code>
            {`document.getElementById('dynamicContent').innerHTML = 'This is dynamic content';`}
          </code>
        </div>
        <div className="d-flex justify-content-between align-items-center container">
          <Link to="/question-2">
            <button className='btn btn-lg btn-dark text-light fw-semibold'>prev</button>
          </Link>
          <Link to="/question-4">
            <button className='btn btn-lg btn-dark text-light fw-semibold'>next</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
