const MainSection = () => {
  return (
    <main style={styles.mainContainer}>
      <section style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Welcome to Our Website</h2>
        <p style={styles.sectionContent}>
          This is the main section of the website where we introduce our content.
        </p>
      </section>
      <section style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.sectionContent}>
          We are a company dedicated to providing the best services to our customers.
        </p>
      </section>
      <section style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.sectionContent}>
          We offer a wide range of services including web development, app development, and more.
        </p>
      </section>
    </main>
  );
};

const styles = {
  mainContainer: {
    padding: '40px 20px',
    margin: "10px",
    backgroundColor: '#f4f4f4',
  },
  sectionContainer: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    margin: '0 0 10px',
    fontSize: '24px',
    color: '#333',
  },
  sectionContent: {
    margin: 0,
    fontSize: '16px',
    color: '#555',
  },
};

export default MainSection;
