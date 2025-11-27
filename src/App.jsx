import { Router, Route } from "wouter-preact";
import NavBar from "./components/NavBar.jsx";
import ThemeHandler from "./components/ThemeHandler.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Router>

      <ThemeHandler />

      <NavBar />

      <main>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>

    </Router>
  )
}
