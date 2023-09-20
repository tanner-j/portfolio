import React from 'react'

const Experience = () => {
    return (
        <section id="experience">
            <div className="section-content experience">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Experience
                </h1>
                <div className="experience-container">
                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>Mendix (Siemens) | August 2022 - August 2023</span>
                            <h2>Associate Front-end Consultant</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Continued role from TimeSeries - acquired by Mendix</li>
                            <li>Extended Mendix widgets and modules and implemented custom UI components with HTML, CSS, and JavaScript to meet specific project requirements, align with a client's unique brand identity, and create visual consistency</li>
                            <li>Worked closely with design and back-end teams to ensure seamless integration of styled widgets/components</li>
                            <li>Provided consulting services to clients on front-end best practices, application design, and user experience</li>
                            <li>Actively participated in Scrum development processes, attending daily stand-ups and contributing to sprint planning and retrospectives for project success</li>
                            <li>Executed a comprehensive UI refactoring of a Mendix application serving Wells Fargo while ensuring WCAG AA compliance, resulting in an enhanced user experience and accessibility standards adherence</li>
                            <li>Collaborated with senior UI designer to design a modern loan management application that replaced a client's outdated, user-unfriendly legacy system</li>
                            <li>Designed internal application showcasing Design Services offerings, tailored for sales team to increase client engagement and improve sales outcomes of UI services</li>
                            <li>Collaborated with team members on a customizable design system for Mendix applications, utility classes, and dynamic CSS styles and variables</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>TimeSeries | February 2022 - August 2022</span>
                            <h2>Junior Industry Solutions Consultant</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Completed a rigorous fast-forward Mendix training program, demonstrating proficiency in object-oriented programming and strength in UI design</li>
                            <li>Acquired proficiency in consulting, specifically in gathering requirements and providing comprehensive advice to clients in both business and IT domains</li>
                            <li>Attained two certifications (Mendix Rapid Developer and Professional Scrum Master I) within a remarkable 4-month period of employment, showcasing a rapid learning curve and dedication to professional development</li>
                            <li>Participated in development of a Siemens Enterprise Recipe Managament application that optimized ingredient management, quality assurance, and integration with production processes, combining multiple softwares into one source</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience;