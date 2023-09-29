import React from 'react'
import Typist from 'react-typist'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Hero = () => {
    return (
        <section id="hero">
            <div className="heroheader bg-color-primary-light h-screen flex justify-center content-start overflow-hidden z-10 -mt-12">
                <Fade>

                    <div className="pt-20 text-center">
                        <span className="font-inter text-3.5xl">Hello! I'm</span>
                        <h1 className="text-8xl md:text-8xl lg:text-9xl font-space-grotesk font-bold tracking-tight">Tanner Johnson</h1>
                        <div className="flex justify-between">
                            <span className="text-3.5xl">front-end developer</span>
                            <span className="text-3.5xl">based in Denver, CO</span>
                        </div>
                        <Link to="about" smooth="true">
                            <button className="focus:outline-none rounded-full mt-2 py-2 px-4 bg-color-primary items-center flex text-white justify-between float-right hover:bg-color-primary-dark hover:shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                                <p className="pl-3">More about me</p>
                            </button>
                        </Link>
                    </div>
                </Fade>

            </div>
        </section>

    )
}

export default Hero;

