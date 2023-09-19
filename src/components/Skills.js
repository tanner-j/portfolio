import React from 'react'
import Fade from 'react-reveal/Fade'
import SkillInfo from './SkillInfo'


const Skills = () => {
    const skills = [
        {
            name: "JavaScript",
            skillType: "Development",
            imageUrl: require("../images/js-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "HTML5",
            skillType: "Development",
            imageUrl: require("../images/html-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "CSS3",
            skillType: "Development",
            imageUrl: require("../images/css-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "SASS/SCSS",
            skillType: "Development",
            imageUrl: require("../images/sass-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Mendix (Intermediate)",
            skillType: "Development",
            imageUrl: require("../images/mendix-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Java",
            skillType: "Development",
            imageUrl: require("../images/java-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "C++",
            skillType: "Development",
            imageUrl: require("../images/c++-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "ReactJS",
            skillType: "Development",
            imageUrl: require("../images/react-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Tailwind",
            skillType: "Development",
            imageUrl: require("../images/tailwind-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Bootstrap",
            skillType: "Development",
            imageUrl: require("../images/bootstrap-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Git",
            skillType: "Development",
            imageUrl: require("../images/git-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Figma",
            skillType: "UI/UX Design",
            imageUrl: require("../images/figma-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Web Accessibility",
            skillType: "Development",
            imageUrl: require("../images/a11y-logo.png"),
            experience: "3+ years of experience"
        },
        {
            name: "Scrum",
            skillType: "Development",
            imageUrl: require("../images/scrum-logo.png"),
            experience: "3+ years of experience"
        },
    ]

    return (
        <section id="skills">
            <div className="h-auto items-center md:p-20 p-12 overflow-hidden">
                <h1 className="font-space-grotesk font-semibold text-2xl md:text-4xl">
                    <span className="text-color-primary">&#47; </span>
                    Skills
                </h1>
                <div className="skills-filters"></div>
                <div className="skills-container">
                    {skills.map((skill) => (
                        <SkillInfo
                            name = {skill.name}
                            skillType = {skill.skillType}
                            imageUrl = {skill.imageUrl}
                            experience = {skill.experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;