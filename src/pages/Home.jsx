import { Link } from "wouter-preact";

export default function Home() {
  return (
    <div>
      <h1>Homepage!</h1>
      <Link href="/about">Go to About</Link>
    </div>
  )
}

