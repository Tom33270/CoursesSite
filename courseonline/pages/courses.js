import { useState } from "react";
import Header from "../components/Header";
import { categories } from "../data/products";
import styles from "../styles/courses.module.css";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Liste de courses</h1>

        {/* Affichage des catégories */}
        {!selectedCategory && (
          <div className={styles.categoryGrid}>
            {categories.map((cat, index) => (
              <div
                key={index}
                className={styles.categoryCard}
                style={{ backgroundImage: `url(${cat.image})` }}
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
            <button
              className={styles.backButton}
              onClick={() => setSelectedCategory(null)}
            >
              ← Retour
            </button>

            <h2 className={styles.categoryTitle}>{selectedCategory.name}</h2>

            <ul className={styles.itemGrid}>
              {selectedCategory.items.map((item, index) => (
                <li
                  key={index}
                  className={styles.itemCard}
                  style={{ backgroundImage: `url(${item.image})` }}
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