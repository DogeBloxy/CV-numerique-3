import "./ProjectCard.css"

function ProjectCard({ project }) {

  const getBadgeClass = (type) => {
    const typeMap = {
      "école": "badge-school",
      "personnel": "badge-personnal",
    }
    return typeMap[type];
  }

  const getStatusClass = (status) => {
    const statusMap = {
      "terminé": "done",
      "en cours": "in-progress",
      "archivé": "archived",
    }
    return statusMap[status]
  }

  const getDotClass = (status) => {
    const dotsMap = {
      "terminé": "green",
      "en cours": "orange",
      "archivé": "gray",
    }
    return dotsMap[status]
  }

  return (
    <div className="project-card">
      <div className="project-card-header">
        <img src={project.image} alt={project.title} />
        <span className={`badge-type ${getBadgeClass(project.type)}`}>{project.type}</span>
        <span className={`badge-status ${getStatusClass(project.status)}`}><span className={`dot ${getDotClass(project.status)}`}></span>{project.status}</span>
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && <a target="_blank" href={project.github}>github</a>}
          {project.live && <a target="_blank" href={project.live}>live</a>}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard