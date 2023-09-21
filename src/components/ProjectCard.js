import React from 'react'

function ProjectCard(props) {
    const { id, imageUrl, alt, title, tags, description } = props;

    return (
        <div className="project-item" key={id}>
            <div className="project-item--image">
                <img src={imageUrl.default} alt={alt}/>
            </div>
            <div className="project-item--info">
                <h2 className="project-item--header">{title}</h2>
                <div className="project-item--tags">
                    <p>{tags}</p>
                </div>
                <p className="project-item--description">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;