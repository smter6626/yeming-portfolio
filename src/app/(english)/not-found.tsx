import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="container not-found"><p className="eyebrow">404 / Outside the map</p><h1>This page isn&apos;t here.</h1><p>Explore the work from the homepage.</p><div><Link href="/" className="button-primary">Return home</Link></div></main>;
}
