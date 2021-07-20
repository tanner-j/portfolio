import React from 'react'
import Slide from 'react-reveal/Slide'

const Contact = () => {
    return (
        <section id="contact">
                <div className="bg-amber-400 h-auto md:p-24 p-20 flex flex-col justify-center items-center xl:-mt-12">
                    <Slide right>
                    <div className="bg-black rounded-2xl w-11/12 p-16 xl:-mt-48 -mt-36 shadow-2xl relative xl:flex xl:col-span-3 justify-between">
                        <h1 className="xl:p-0.5 pb-6 text-4xl md:text-5xl lg:text-6xl text-white font-sarabun font-bold tracking-tight text-center">Contact Me</h1>
                        <h2 className="xl:p-0.5 pb-6 text-xl md:text-2xl lg:text-3xl text-white font-sarabun text-center">Interested in connecting? <br />Reach out via email.</h2>
                        <a className="flex justify-center" href="mailto:tdjohnson330@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button className="focus:outline-none rounded-full md:py-5 md:px-11 py-3 px-9 bg-black border-amber-400 border-4 md:text-xl text-lg text-white font-bold font-sarabun-bold hover:shadow-lg hover:bg-amber-400 hover:text-white">tdjohnson330@gmail.com</button>
                        </a>
                    </div>
                    </Slide>
                    <div className="w-2/3 flex flex-col items-center justify-center">
                        <h2 className="xl:text-4xl text-3xl font-sarabun text-white text-center pt-24 pb-16">That mindset / That goal / That dream /<br />Build it.</h2>
                        <div className="flex gap-x-4">
                            <a href="https://github.com/tanner-j" target="_blank" rel="noreferrer">
                                <button className="focus:outline-none flex justify-center items-center border-opacity-50 border-white border-4 rounded-full w-16 h-16 hover:border-opacity-100 hover:bg-white hover:shadow-xl hover:fill-amber-400 text-white hover:text-amber-400">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fill-current" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </button>
                            </a>
                            <a href="https://linkedin.com/in/tanner-johnson-330" target="_blank" rel="noreferrer">
                                <button className="focus:outline-none flex justify-center items-center border-opacity-50 border-white border-4 rounded-full w-16 h-16 hover:border-opacity-100 hover:bg-white hover:shadow-xl hover:fill-amber-400 text-white hover:text-amber-400">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fill-current" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                </button>
                            </a>
                            <a href="mailto:tdjohnson330@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button className="focus:outline-none flex justify-center items-center border-opacity-50 border-white text-white border-4 rounded-full w-16 h-16 hover:border-opacity-100 hover:bg-white hover:shadow-xl hover:fill-amber-400 hover:text-amber-400">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </button>
                            </a>
                        </div>
                        <h2 className="xl:text-xl text-lg font-sarabun text-white text-center pt-12 pb-6">Handcrafted by me &copy; Tanner Johnson</h2>
                    </div>
                </div>
        </section>
    )
}

export default Contact;