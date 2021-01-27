import React from 'react'
import Bar from './Bar';
import { languages, Tools } from './SidebarData'
import {motion} from 'framer-motion'

export default function Skill() {

    const skil__variant = {
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
        <motion.div className='skill'
            variants={skil__variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="container skill__container">
                <div className="row skill__row">
                    <div className="col-lg-6 languages">
                        <h5 className="lan__and__frame">
                            Language & Framework
                        </h5>
                        <div className="language__body">
                            {
                                languages.map(main_language =>
                                    <Bar value={main_language}/> 
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 languages">
                        <h5 className="lan__and__frame">
                            Tools and Softwares
                        </h5>
                        <div className="language__body">
                            {
                                Tools.map(main_tool =>
                                    <Bar value={main_tool}/>
                                )
                            }
                        </div>
                    </div>
                </div>
           </div>
        </motion.div>
    )
}
