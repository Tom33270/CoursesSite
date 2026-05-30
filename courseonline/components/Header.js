import Link from "next/link";

export default function Header() {
  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Historique", href: "/history" },
    { label: "Top Produits", href: "/top-products" },
  ];

  return (
    <header
      style={{
        padding: "1rem",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        marginBottom: "2rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          fontSize: "1.1rem",
        }}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
