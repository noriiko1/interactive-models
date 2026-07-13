import './App.css'

function App() {
  return (
    <div className="site-root">
      <header className="site-header">
        <h1 className="title">Interactive Models</h1>
        <p className="subtitle">A portfolio of interactive three.js projects</p>
        <nav className="main-nav" aria-label="Primary">
          <a href="/" className="nav-link">Home</a>
          <a href="/projects" className="nav-link">Projects</a>
          <a href="/about" className="nav-link">About</a>
        </nav>
      </header>

      <main className="content">
        <section className="intro">
          <h2>Welcome</h2>
          <p>
            This site will showcase three interactive three.js projects. Click a
            project below to view details when available.
          </p>

          <ul className="projects-grid">
            <li>
              <a href="/projects/project-1" className="project-card">
                <img src="/placeholder.png" alt="Project 1 — Interactive Scene" />
                <span>Project 1 — Interactive Scene</span>
              </a>
            </li>
            <li>
              <a href="/projects/project-2" className="project-card">
                <img src="/placeholder.png" alt="Project 2 — Physics Demo" />
                <span>Project 2 — Physics Demo</span>
              </a>
            </li>
            <li>
              <a href="/projects/project-3" className="project-card">
                <img src="/placeholder.png" alt="Project 3 — Shader Experiments" />
                <span>Project 3 — Shader Experiments</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Interactive Models</small>
      </footer>
    </div>
  )
}

export default App
