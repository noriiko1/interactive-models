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

          <ul className="projects-list">
            <li><a href="/projects/project-1">Project 1 — Interactive Scene</a></li>
            <li><a href="/projects/project-2">Project 2 — Physics Demo</a></li>
            <li><a href="/projects/project-3">Project 3 — Shader Experiments</a></li>
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
