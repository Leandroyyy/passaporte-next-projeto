import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        Passaporte
      </Link>
      <nav>
        <Link href="/">Países</Link>
        <a href="/sobre">Sobre</a>
      </nav>
    </header>
  );
}
