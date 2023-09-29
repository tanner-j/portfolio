import React from 'react'
import about from '../images/about.jpg'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about">
            <div className="section-content about">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    About Me
                </h1>
                <div className="about-container">
                    <div className="about-image--wrapper">
                        <img src={about} alt="B&W portrait sitting on concrete wall" className="w-20 rounded-lg" />
                    </div>
                    <div className="about-info--wrapper">
                        <div className="about-cards--wrapper">
                            <div className="about-card">
                                <p>Card 1</p>
                            </div>
                            <div className="about-card">
                                <p>Card 2</p>
                            </div>
                        </div>
                        <p>This is a test</p>
                    </div>
                </div>


                {/* <div className="xl:grid xl:grid-cols-2 gap-12">

                    <div>
                        <Fade bottom>
                            <img src={about} alt="B&W portrait sitting on concrete wall" className="pt-8 w-max rounded-lg" />
                        </Fade>
                    </div>

                    <div>
                        <Fade bottom>
                            <div className=" xl:pt-8 pt-12">
                                <p className="text-lg lg:text-xl font-sarabun font-normal">
                                    <b>&#128075; Hi there, I'm Tanner.</b> I'm an aspiring software engineer and web developer based out of Denver, CO. With a passion in front-end development, I love to design and code beautiful, intuitive user experiences from scratch.<br /><br />
                                    Away from the computer, I'm either hiking a trail with my dog, whipping up a competition-worthy dish in the kitchen, or enjoying a nice book paired with a cup of coffee. I'm originally from Georgia where I graduated from Kennesaw State University with a bachelor's degree in Software Engineering - during a global pandemic. Yikes.<br /><br />
                                    I'm curious by nature, extremely well-organized, and quietly confident. I'm attentive to detail, quick to learn, and eager to solve a problem. Above all, I'm interested in working on the front-end development landscape and collaborating with positive people on creative, ambitious projects.
                                </p>
                            </div>
                            <div className="p-8 pb-2 flex xl:justify-end justify-center w-auto">
                                <Link to="contact" smooth="true">
                                    <button className="focus:outline-none rounded-full md:py-4 md:px-10 py-2 px-8 bg-white border-amber-400 border-4 md:text-xl text-lg text-amber-400 font-bold font-sarabun-bold hover:shadow-lg hover:bg-amber-400 hover:text-white">
                                        Let's connect
                                    </button>
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About;
