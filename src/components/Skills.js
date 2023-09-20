import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import SkillInfo from './SkillInfo'

const Skills = () => {
    const skills = [
        {
            name: "JavaScript",
            skillType: "Development",
            imageUrl: require("../images/js-logo.png"),
            alt: "JavaScript icon",
            experience: "3+ years of experience"
        },
        {
            name: "HTML5",
            skillType: "Development",
            imageUrl: require("../images/html-logo.png"),
            alt: "HTML5 icon",
            experience: "3+ years of experience"
        },
        {
            name: "CSS3",
            skillType: "Development",
            imageUrl: require("../images/css-logo.png"),
            alt: "CSS3 icon",
            experience: "3+ years of experience"
        },
        {
            name: "SASS/SCSS",
            skillType: "Development",
            imageUrl: require("../images/sass-logo.png"),
            alt: "SASS/SCSS icon",
            experience: "3+ years of experience"
        },
        {
            name: "Mendix (Intermediate)",
            skillType: "Development",
            imageUrl: require("../images/mendix-logo.png"),
            alt: "Mendix icon",
            experience: "3+ years of experience"
        },
        {
            name: "Java",
            skillType: "Development",
            imageUrl: require("../images/java-logo.png"),
            alt: "Java icon",
            experience: "3+ years of experience"
        },
        {
            name: "C++",
            skillType: "Development",
            imageUrl: require("../images/c++-logo.png"),
            alt: "C++ icon",
            experience: "3+ years of experience"
        },
        {
            name: "ReactJS",
            skillType: "Development",
            imageUrl: require("../images/react-logo.png"),
            alt: "ReactJS icon",
            experience: "3+ years of experience"
        },
        {
            name: "Tailwind CSS",
            skillType: "Development",
            imageUrl: require("../images/tailwind-logo.png"),
            alt: "Tailwind CSS icon",
            experience: "3+ years of experience"
        },
        {
            name: "Bootstrap",
            skillType: "Development",
            imageUrl: require("../images/bootstrap-logo.png"),
            alt: "Bootstrap icon",
            experience: "3+ years of experience"
        },
        {
            name: "Git",
            skillType: "Development",
            imageUrl: require("../images/git-logo.png"),
            alt: "Github icon",
            experience: "3+ years of experience"
        },
        {
            name: "Figma",
            skillType: "UI/UX Design",
            imageUrl: require("../images/figma-logo.png"),
            alt: "Figma icon",
            experience: "3+ years of experience"
        },
        {
            name: "Web Accessibility",
            skillType: "Development",
            imageUrl: require("../images/a11y-logo.png"),
            alt: "Web accessibility icon",
            experience: "3+ years of experience"
        },
        {
            name: "Scrum",
            skillType: "Development",
            imageUrl: require("../images/scrum-logo.png"),
            alt: "Scrum icon",
            experience: "3+ years of experience"
        },
    ]

    const [skillFilter, setSkillFilter] = useState("all");

    const onOptionChange = (e) => {
        setSkillFilter(e.target.value);
    }

    return (
        <section id="skills">
            <div className="section-content skills">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Skills
                </h1>
                <div className="skills-filters">
                    <label className="filter-item filter-item--active" data-filter-value="all" tabindex="0">
                        All
                        <input type="radio" name="skillFilter" value="all" checked={skillFilter === "all"} onChange={onOptionChange}/>
                    </label>
                    <label className="filter-item" data-filter-value="design" tabindex="0">
                        UI/UX Design
                        <input type="radio" name="skillFilter" value="design" checked={skillFilter === "design"} onChange={onOptionChange}/>
                    </label>
                    <label className="filter-item" data-filter-value="development" tabindex="0">
                        Development
                        <input type="radio" name="skillFilter" value="development" checked={skillFilter === "development"} onChange={onOptionChange}/>
                    </label>
                </div>
                <div className="skills-container">
                    {skills.map((skill) => (
                        <SkillInfo
                            name = {skill.name}
                            skillType = {skill.skillType}
                            imageUrl = {skill.imageUrl}
                            alt = {skill.alt}
                            experience = {skill.experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;

// const filterButtons = document.querySelectorAll('input[type="radio"][name="skillFilter"]');
// let initiallyChecked = document.querySelector('input[type="radio"][name="skillFilter"]:checked');
 
// filterButtons.forEach((filter) => {
//     filter.addEventListener('change', function () {
//         if (this !== initiallyChecked) {
//             initiallyChecked.removeAttribute('checked');
//             this.setAttribute('checked', 'checked');
//             initiallyChecked = this;
//         }
//     });
// });


    // $("input[name='skillFilter']").change(function() {
    //     var selectedFilter = $("input[name='skillFilter']:checked").val();

    //     // First remove active styling from all filters
    //     $(".filter-item").removeClass("filter-item--active");

    //     //Add active styling to selected filter
    //     $(".filter-item[data-filter-value='"+selectedFilter+"']").addClass("filter-item-active");

    //     //Hide all skill objects
    //     $(".skill").hide();

    //     //Display skill objects accordingly
    //     if (selectedFilter === "all") {
    //         $(".skill").show();
    //     } else {
    //         $(".skill[data-skill-type='"+selectedFilter+"']").show();
    //     }
    // });