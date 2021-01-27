import React from 'react'
import {motion} from 'framer-motion'

const data = [

    {
        position:'Graphics Designer',
        cName: 'New Foods',
        year:'2020-continue',
    },

    {
        position:'Web Developer',
        cName: 'Needleman',
        year:'2020-continue',
    },

    {
        position:'Content Designer',
        cName: 'LiveGear',
        year:'2019-2020',
    },

    {
        position:'Content Editor',
        cName: 'ClickBuzz',
        year:'2017-2019',
    },
]

export default function Experience() {

    const exp__variant = {
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
        <motion.div className='experience'
            variants={exp__variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="container exp__container">
                <div className="row exp__row">
                    {
                        data.map(main__data =>
                            <div className="col-md-3 col-lg-6">
                        <div className="exp-card">
                            <div className="exp-card-body">
                                <h3 className="exp-card-title">
                                      {main__data.cName}      
                                </h3>
                                <h2 className="exp-card-name">
                                      {main__data.position}      
                                </h2>
                                <h5 className="exp-year">
                                      {main__data.year}
                                </h5>
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
