import React from 'react'

const Skills = () => {
    return (
        <div className="bg-white h-auto items-center md:p-24 p-20">
            <h1 className="font-bold font-sarabun tracking-tight text-4xl md:text-5xl">&lt;My Skills &#47;&gt;</h1>
            <div className="xl:grid xl:grid-flow-col xl:grid-cols-3 gap-10 pt-8 xl:space-y-0 space-y-10">
                <div className="xl:col-span-1 bg-truegray-100 rounded-lg p-8 border-truegray-200 border border-opacity-40 shadow-lg">
                    <div className="flex items-center pb-4">
                        <svg className="lg:w-12 lg:h-12 w-10 h-10 bg-amber-400 rounded-lg border-amber-400 border-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        <h2 className="pl-5 lg:text-3xl text-2xl font-sarabun font-bold">Languages</h2>
                    </div>
                    <ul className="list-disc font-sarabun text-lg lg:text-xl xl:text-2xl pl-12 space-y-1">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C++</li>
                    </ul>
                    <p className="font-sarabun text-lg lg:text-xl xl:text-2xl p-2 pt-4">
                        The main area of my expertise is front-end development with HTML, CSS and JavaScript. I'm also proficient in Java and C++, both of which I used for building course projects. Currently, I'm interested in learning jQuery to add to my front-end development utility belt.
                    </p>
                </div>
                <div class="xl:col-span-1 w-full bg-truegray-100 rounded-lg p-8 border-truegray-200 border border-opacity-40 shadow-lg">
                    <div className="flex items-center pb-4">
                        <svg className="lg:w-12 lg:h-12 w-10 h-10 bg-amber-400 rounded-lg border-amber-400 border-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        <h2 className="pl-5 lg:text-3xl text-2xl font-sarabun font-bold">Frameworks/Tools</h2>
                    </div>
                    <ul className="list-disc font-sarabun text-lg lg:text-xl xl:text-2xl pl-12 space-y-1">
                        <li>ReactJS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Angular</li>
                        <li>Git</li>
                    </ul>
                    <p className="font-sarabun text-lg lg:text-xl xl:text-2xl p-2 pt-4">
                        For building dynamic web applications, I typically use ReactJS as my framework. Tailwind and Bootstrap are two CSS frameworks that I'm very familiar with using to create beautiful, modern and cohesive websites. I also have experience using Git for handling my projects.
                    </p>
                </div>
                <div class="xl:col-span-1 bg-truegray-100 rounded-lg p-8 border-truegray-200 border border-opacity-40 shadow-lg xl:relative">
                    <p className="font-sarabun text-lg lg:text-xl xl:text-2xl p-2">
                        For building dynamic web applications, I typically use ReactJS as my framework. Tailwind and Bootstrap are two CSS frameworks that I'm very familiar with using to create beautiful, modern and cohesive websites. I also have experience using Git for handling my projects.
                    </p>
                    <div className="p-2 xl:pt-0 pt-4 flex justify-center w-auto xl:absolute xl:bottom-0 xl:right-0 xl:pr-10 xl:pb-10">
                        <button className="rounded-full md:py-5 md:px-11 py-3 px-9 bg-white border-amber-400 border-4 md:text-xl text-lg text-amber-400 font-bold font-sarabun-bold hover:shadow-lg hover:bg-amber-400 hover:text-white">
                            View resume
                        </button>
                </div>
                    </div>
            </div>
        </div>
    )
}

export default Skills;