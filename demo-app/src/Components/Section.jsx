const Section = () => {
  return (
    <section style={styles.sectionContainer}>
      <h2 style={styles.sectionTitle}>Title</h2>
      <p style={styles.sectionContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus rem minima iure nemo aperiam soluta totam quaerat laborum doloremque in nam hic fugiat suscipit recusandae ipsa deleniti ducimus temporibus assumenda, iste commodi. Explicabo dolor consequatur provident libero, quas in aspernatur architecto quam ipsam quae ad dignissimos mollitia doloremque ullam?</p>
    </section>
  );
};

export default Section;

const styles = {
  sectionContainer: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    margin: '0 0 10px',
    fontSize: '50px',
    color: '#333',
    textAlign: "center"
  },
  sectionContent: {
    margin: 0,
    fontSize: '30px',
    color: '#555',
  },
};
