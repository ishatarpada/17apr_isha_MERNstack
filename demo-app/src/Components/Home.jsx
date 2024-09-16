import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75vh',
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
    image: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '2.5em',
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
        <h1 style={styles.heading}>Welcome to Our Website</h1>
        <div style={styles.content}>
          <img
            src="data:image/png;base64,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"
            alt="Welcome"
            style={styles.image}
          />
          <p style={styles.paragraph}>
            We are excited to have you here! Explore our site to learn more about our services and how we can help you achieve your goals.
          </p>
          <p style={styles.paragraph}>
            Our team is dedicated to providing the best solutions tailored to your needs. From web development to digital marketing, we offer a range of services to help you succeed online.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
