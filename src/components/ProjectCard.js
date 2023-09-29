import React from 'react'

function ProjectCard(props, index) {
    const { id, imageUrl, alt, title, tags, description } = props;

     // Check if tags is an array
     const tagsArray = Array.isArray(tags) ? tags : [];

    return (
        <div className="project-item" key={index} id={id}>
            <div className="project-item--image">
                <img src={imageUrl.default} alt={alt}/>
            </div>
            <div className="project-item--info">
                <h2 className="project-item--header">{title}</h2>
                <div className="project-item--tags">
                    {tagsArray.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <p className="project-item--description">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;