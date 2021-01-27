import React from 'react'
import img1 from '../src/Images/3.png'
import {motion} from 'framer-motion'


const About = () => {

    const about__varient = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                delay:0.1, duration:0.6,
            }
        },
        exit: {
            opacity: 0,
            trasition: {
                ease:"easeOut"
            }
            }
    }

    return (
        <motion.div className='about'
            variants={about__varient}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="container about__container">
                <div className="row about__row">
                    <div className="col-md-7 text">
                        <h3 className='one__text'>HI,</h3>
                        <h2 className='two__text'>MYSELF</h2>
                        <h1 className='three__text'><span className="about-mod">NIBIR IMTIAZ</span></h1>
                        <p className='lead'>i am a web developer and a graphics designer.
                        i basically work on development but design is my first priority.
                        recently i am working with
                        <span className='about-mod'> react.js</span></p>
                    </div>
                    <div className="col-md-5">
                    <img src={img1} alt="" className='img' width='300'/>
                    </div>
                </div>
            </div>
        </motion.div>
    ) 
}

export default About