import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ContactUs() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      backgroundColor: '#282c34',
      color: 'white',
      margin: "10px 0",
      textAlign: 'center',
      padding: '0px 20px',
    },
    content: {
      maxWidth: '800px',
      margin: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '500px',
      margin: 'auto',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
    heading: {
      fontSize: '2em',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <div style={styles.content}>
          <p style={styles.paragraph}>
            We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
          </p>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" rows="4" style={styles.input} />
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
