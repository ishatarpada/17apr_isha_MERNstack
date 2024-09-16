import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '85vh',
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
        <h1 style={styles.heading}>About Us</h1>
        <div style={styles.content}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2EgpwcW1xNwy7WK8cwlK2d2zgsYOSr7qVJ6oHy6iaCA77raIGEerfkWN-7VD2PBX8c0&usqp=CAU"
            alt="About Us"
            style={styles.image}
          />
          <p style={styles.paragraph}>
            We are a dedicated team of professionals committed to delivering high-quality services and solutions. Our mission is to empower businesses and individuals with innovative technology and exceptional support.
          </p>
          <p style={styles.paragraph}>
            Our team consists of experts in various fields including web development, software engineering, and digital marketing. We work collaboratively to ensure that every project meets the highest standards and exceeds our clients expectations.
          </p>
          <p style={styles.paragraph}>
            We believe in transparency, integrity, and a client-centered approach. Whether you are looking to build a new website, develop a custom application, or enhance your online presence, we are here to help you achieve your goals.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
