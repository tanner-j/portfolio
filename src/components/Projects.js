import React from 'react'
import cfa from '../images/cfa.png'
import dogapp from '../images/dogapp.png'
import Fade from 'react-reveal/Fade'

const Projects = () => {
    return (
        <section id="projects">
            <div className="h-auto md:p-20 p-12 overflow-hidden">
                <h1 className="font-space-grotesk font-semibold text-2xl md:text-4xl">
                    <span className="text-color-primary">&#47; </span>
                    Recent Work
                </h1>
                {/* First project */}
                <Fade bottom>
                <div className="flex flex-wrap items-center pt-10 p-4 mb-6 xl:mb-32">
                    <div className="w-full xl:w-2/5 z-10">
                        <div className="text-left pb-3">
                            <h4 className="lg:text-3xl text-2xl font-sarabun font-bold">Restaurant Training App</h4>
                            <div className="bg-amber-400 h-2"></div>
                        </div>
                        <div className="rounded pl-5 pt-2 xl:pr-24 mr-0 xl:-mr-16 mb-6">
                            <p className="font-sarabun text-xl leading-relaxed">
                                I developed this application in response to a heavy influx of new trainees at a previous place of employment, Chick-fil-A Windy Hill. This interactive quiz provides users with useful training information, guidelines, and procedures, provided via requirements from the restaurant's Talent and Training Directors.<br /> This version of the application is currently used as a  practice tool, but eventually will be used as a scored assessment for trainees.
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="flex justify-start mb-6 font-sarabun text-md">
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">HTML</span>
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">CSS</span>
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">JavaScript</span>
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">JSON</span>
                            </div>
                            <div className="flex justify-start">
                                <a href="https://github.com/tanner-j/chick-fil-a-training-quiz" target="_blank" rel="noreferrer" className="hover:text-xs mr-3 lg:h-8 lg:w-8 h-6 w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                <a href="https://tanner-j.github.io/chick-fil-a-training-quiz/" target="_blank" rel="noreferrer" className="text-theme-gray-light hover:text-xs lg:h-8 lg:w-8 h-6 w-6">
                                    <svg stroke="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-3/5 xl:pb-14 pb-4 order-first xl:order-last">
                        <img src={cfa} className="rounded-xl shadow-md border-truegray-200 border border-opacity-40" alt="CFA Windy Hill Training Quiz application" />
                    </div>   
                </div>
                </Fade>
                {/* Next project */}
                <Fade bottom>
                <div className="flex flex-wrap items-center p-4 mb-6 xl:mb-32 xl:-mt-24 pb-12 xl:pb-4">
                    <div className="w-full xl:w-2/5 z-10">
                        <div className="text-left pb-3">
                            <h4 className="lg:text-3xl text-2xl font-sarabun font-bold">Dog Day Care Robot</h4>
                            <div className="bg-amber-400 h-2"></div>
                        </div>
                        <div className="rounded pl-5 pt-2 xl:pr-24 mr-0 xl:-mr-16 mb-6">
                            <p className="font-sarabun text-xl leading-relaxed">
                            As a course project for UI Engineering, I created this prototype for a fictitious dog day care robot. The project prompted to design and test a high-fidelity prototype application that controls a robot to perform certain tasks. Using UX design concepts and practices, I collected design and user research, executed user interviews and personas, and implemented low and high-fidelity prototype models.
                            This project highlights my passion and skill in UI/UX design, as well as my understanding and experience with the early stages of SDLC.

                            </p>
                        </div>
                        <div className="text-left">
                            <div className="flex justify-start mb-6 font-sarabun text-md">
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">Marvel</span>
                                <span className="mr-2 bg-truegray-200 p-1.5 rounded-md">Adobe Illustrator</span>
                            </div>
                            <div className="flex justify-start">
                                <a href="https://marvelapp.com/jf5g3gj" target="_blank" rel="noreferrer" className="text-theme-gray-light hover:text-xs lg:h-8 lg:w-8 h-6 w-6">
                                    <svg stroke="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-3/5 xl:pb-24 pb-4 order-first xl:order-last">
                        <img src={dogapp} className="rounded-xl shadow-md border-truegray-200 border border-opacity-40 bg-gradient-to-b from-coolgray-900 to-warmgray-600" alt="Dog Day Care Robot application prototype" />
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}

export default Projects;