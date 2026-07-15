import { Link } from 'react-router-dom'
import './ProjectNav.css'

const PROJECTS = [
  { id: 1, path: '/projects/project-1', label: 'Project 1' },
  { id: 2, path: '/projects/project-2', label: 'Project 2' },
  { id: 3, path: '/projects/project-3', label: 'Project 3' },
]

export default function ProjectNav({ current }) {
  const index = PROJECTS.findIndex((p) => p.id === current)
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <div className="project-nav">
      <Link to="/" className="nav-btn home-btn" aria-label="Back to home">
        ← Home
      </Link>
      <div className="project-nav-arrows">
        <Link to={prev.path} className="nav-btn" aria-label={`Previous: ${prev.label}`}>
          ← Previous
        </Link>
        <Link to={next.path} className="nav-btn" aria-label={`Next: ${next.label}`}>
          Next →
        </Link>
      </div>
    </div>
  )
}
