import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [activeSection, setActiveSection] = useState("home");

  const showContent = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">JR</div>
        <nav>
          <ul>
            <li>
              <a href="#home" onClick={() => showContent("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => showContent("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => showContent("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className={`content-section ${
            activeSection === "home" ? "active" : ""
          }`}
          aria-hidden={activeSection !== "home"}
        >
          <div className="intro">
            <div className="intro-text">
              <h2>Welcome to My Website</h2>
            </div>
            <div className="image-placeholder"></div>
          </div>
        </section>

        <section
          id="about"
          className={`content-section ${
            activeSection === "about" ? "active" : ""
          }`}
          aria-hidden={activeSection !== "about"}
        >
          <h2 class="abou">About Me</h2>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className={`content-section ${
            activeSection === "contact" ? "active" : ""
          }`}
          aria-hidden={activeSection !== "contact"}
        >
          <h2>Contact</h2>
          <a href="mailto:jonas.rutz@ksb-sg.ch" className="mail-button">
            Mail
          </a>
        </section>
      </main>

      <footer>
        <p>Jonas Rutz</p>
      </footer>
    </div>
  );
}

export default App;
