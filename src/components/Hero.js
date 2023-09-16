import React from 'react'
import profile from '../images/profile.png'
import Typist from 'react-typist'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Hero = () => {
    return (
        <section id="hero">
            <div className="bg-white h-screen flex flex-col justify-center items-center overflow-hidden z-10 -mt-12">
                <Fade>
                    <div className="hover:animate-wiggle">
                        <img src={profile} alt="Profile face" className="w-36 lg:w-40 mx-auto shadow-2xl border-solid border-2 border-black border-opacity-10 rounded-full" />
                    </div>

                    <div className="text-center pb-10">
                        <h1 className="p-0.5 pt-5 text-8xl md:text-8xl lg:text-10xl text-black font-sarabun-bold font-black tracking-tight">
                            This is a test
                        </h1>
                        <h1 className="p-0.5 text-5xl lg:text-6xl text-black font-sarabun-thin font-extralight">
                            <Typist>
                                <span>&#47;&#47; designer.</span>
                                <Typist.Backspace count={9} delay={550} />
                                <span>thinker.</span>
                                <Typist.Backspace count={8} delay={550} />
                                <span>creator.</span>
                                <Typist.Backspace count={8} delay={550} />
                                <span>engineer.</span>
                            </Typist>
                        </h1>
                    </div>
                    <Link to="about" smooth="true">
                        <button className="focus:outline-none rounded-full md:py-4 md:px-11 py-2 px-8 bg-amber-400 items-center flex md:text-2xl text-xl text-white font-bold font-sarabun-bold justify-between hover:underline hover:shadow-lg">
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                            <p className="pl-3">More about me</p>
                        </button>
                    </Link>
                </Fade>

            </div>
        </section>

    )
}

export default Hero;
