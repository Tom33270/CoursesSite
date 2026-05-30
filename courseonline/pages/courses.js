import { useState } from "react";
import Header from "../components/Header";
import { categories } from "../data/products";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header />

      <div style={{ maxWidth: "90%", margin: "0 auto", padding: "1rem" }}>
        <h1>Liste de courses</h1>

        {/* Affichage des catégories */}
        {!selectedCategory && (
          <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
  }}>
            {categories.map((cat, index) => (
             <div
  key={index}
  className="card"
  style={{
    cursor: "pointer",
    textAlign: "center",
    padding: "2rem 1rem",
    height: "200px",
    width:"200px",
    borderRadius: "10px",
    backgroundImage: `url(${cat.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "beige",
    fontWeight: "bold",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  onClick={() => setSelectedCategory(cat)}
>
  {cat.name}
</div>

            ))}
          </div>
        )}

        {/* Affichage des produits d'une catégorie */}
        {selectedCategory && (
          <>
            <button onClick={() => setSelectedCategory(null)}>
              ← Retour
            </button>

            <h2>{selectedCategory.name}</h2>

            <ul
  style={{
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "1rem"
  }}
>
              {selectedCategory.items.map((item, index) => (
 <li
  key={index}
  className="card"
  style={{
    marginBottom: "1rem",
    padding: "2rem 1rem",
    borderRadius: "10px",
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "beige",
    fontWeight: "bold",
    textShadow: "0 2px 4px rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    width:"100px"
  }}
>
  {item.nom}
</li>

))}

            </ul>
          </>
        )}
      </div>
    </>
  );
}
