import React from 'react'

export default function App() {

  const styles = {
    section: {
      width: "80%",
      margin: "0 auto",
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      rowGap: "50px", // Correct unit for rowGap
      columnGap: "1%"
    },
    fruitCard: {
      width: "20%",
      margin: "auto",
      textAlign: "center" // Added textAlign for better alignment
    },
    fruitImage: {
      width: "100%",
      borderRadius: "8px" // Added borderRadius for rounded corners
    },
    fruitName: {
      padding: "0",
      marginBottom: "4px",
      fontSize: "1.2em", // Added font size for consistency
      color: "#333" // Color for text
    }
  }

  const fruits = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqaDCx2UY3KNFKHV3yvlkc1E5Y7C5RzgN1th4ND8_sMDh-QTAsf9OprRXqWXXWz0epy0&usqp=CAU",
      name: "Mango"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYRV916bFlN-t3175U4pFZjmFdwpfq3ccdKlX3orhHArvygvU1qMLw12FhufzUtNKmIM&usqp=CAU",
      name: "Banana"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUxSr_saVsLXtbrKiDLCoXU_euyIF0NgKM7ui7WoNbOesCBg3FXDVqGSJa2trj7uRNZE&usqp=CAU",
      name: "Orange"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhc-yqvfFs5-AveXlZ7VXkB8G1ad-XfKSN9LEjy6M_-awNeRCvQELd99Jgnn-qfIlP3XI&usqp=CAU",
      name: "Cherry"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxGo2jVDIWKP5HhaQ399O3X48s3DkdLfqXmalv4W08Z5FLBFu5kARwGyTnUKrGtfhEtI&usqp=CAU",
      name: "Apple"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSne-G6iUHxPIhkI3ILMEYVl2VMfUbE5_VxzG0GNl-iffjo_zx5RBUf4jhIPH_YnJAC_yk&usqp=CAU",
      name: "Guava"
    }
  ]

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fruits</h1>
      <section style={styles.section}>
        {fruits.map((fruit, index) => (
          <div key={index} style={styles.fruitCard}>
            <img src={fruit.image} alt={fruit.name} style={styles.fruitImage} />
            <h2 style={styles.fruitName}>{fruit.name}</h2>
          </div>
        ))}
      </section>
    </>
  )
}
