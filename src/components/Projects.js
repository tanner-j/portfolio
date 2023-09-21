import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
            id: "1",
            imageUrl: require("../images/profile.png"),
            alt: "some text",
            title: "Test1",
            tags: "test",
            description: "This is a test",
        },
        {
            id: "2",
            imageUrl: require("../images/profile.png"),
            alt: "some text",
            title: "Test2",
            tags: "test",
            description: "This is a test",
        },
        {
            id: "3",
            imageUrl: require("../images/profile.png"),
            alt: "some text",
            title: "Test3",
            tags: "test",
            description: "This is a test",
        },
    ];

    return (
        <section id="projects">
            <div className="section-content projects">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Recent Work
                </h1>
                <div className="projects-container">
                    {projects.map((project) => (
                        <ProjectCard
                            key = {project.id}
                            id = {project.id}
                            imageUrl = {project.imageUrl}
                            alt = {project.alt}
                            title = {project.title}
                            tags = {project.tags}
                            description = {project.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;