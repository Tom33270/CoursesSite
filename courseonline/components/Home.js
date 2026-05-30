import Link from "next/link";

export default function Home() {
  const links = [
    { label: "Liste de courses", href: "/courses" },
    { label: "Historique des courses", href: "/history" },
    { label: "Produits les plus sélectionnés", href: "/top-products" },
  ];

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h1>Bienvenue</h1>
      <p>Accédez rapidement à vos outils :</p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div style={{
              padding: "1rem",
              borderRadius: "8px",
              background: "#f0f0f0",
              cursor: "pointer",
              transition: "0.2s",
            }}>
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
