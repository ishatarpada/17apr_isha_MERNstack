const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>© 2024 Your Company. All rights reserved.</p>
        <div style={styles.linksContainer}>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
          <a href="#" style={styles.footerLink}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    margin: 0,
    paddingBottom: '10px',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Footer;
