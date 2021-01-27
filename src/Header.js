import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Header = () => {

    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About')
        else if (currentURL.endsWith('/education'))
            setActive("Education")
        else if (currentURL.endsWith('/experience'))
            setActive("Experience")
        else if (currentURL.endsWith('/skill'))
            setActive("Skill")
    }, [active])
    

    const navbar__variant = {
        hidden: {
            y :'-30vh',
            opacity: 0
        },

        visible: {
            y:0,
            opacity: 1,
            transition: {
                delay:0.2, duration:0.7, type:'spring'
            }
        }
    }

    return (
        <motion.div className='navbar'
            variants={navbar__variant}
            initial='hidden'
            animate='visible'
        >
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'About' &&
                  <Link to='/'><div className="navbar__item" onClick={() => setActive('About')}>About</div></Link>
                }
                {active !== "Education" ?
                   <Link to='/education'> <div className="navbar__item" onClick={() => setActive('Education')}>Education</div></Link>
                    : null}
                
                {active !== 'Experience' ?
                   <Link to='/experience'><div className="navbar__item" onClick={() => setActive('Experience')}>Experience</div></Link>
                    : null}
                
                {active !== 'Skill' &&
                   <Link to='/skill'><div className="navbar__item" onClick={() => setActive('Skill')}>Skill</div></Link>
                }
            </div>
        </motion.div>
    )
}

export default Header;