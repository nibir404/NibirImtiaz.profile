import React from 'react'
import {motion} from 'framer-motion'

export default function Education() {

    const educations = [
        {
        title:'B.sc',
        Iname: "DAFFODIL INSTITUTE OF IT",
        cgpa: '3.14 (avg.)',
        passing__year:'2022'
        },

        {
        title: 'H.S.C',
        Iname: "NATIONAL BANK PUBLIC COLLEGE",
        cgpa:  '4.42',
        passing__year: '2017',
        },
        
        {
        title: 'S.S.C',
        Iname: "TEJGAON ADARSHA HIGH SCHOOL",
        cgpa: '5.00',
        passing__year:'2015'
        }

    ]


    const edu__variant = {
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
        <motion.div className='education'
            variants={edu__variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="container education__container">
                <div className="row education__row">
                    {
                        educations.map(main__education => 
                            <div className="col-lg-4">
                                <div className="edu-card">
                                    <div className="edu__card-body">
                                        <h3 className="edu-card-title">
                                            {main__education.title}
                                        </h3>
                                        <h2 className="edu-card-name">
                                            {main__education.Iname}
                                        </h2>
                                        <h4 className="edu-card-cgp">
                                            {main__education.cgpa}
                                        </h4>
                                        <p className="edu-card-year">
                                            {main__education.passing__year}
                                        </p>
                                    </div>
                                </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}
