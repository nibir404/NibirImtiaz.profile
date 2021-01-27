import React from 'react'
import img1 from '../src/Images/1.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import resume from '../src/Asset/NibirImtiaz.pdf'
import {motion} from 'framer-motion'

export default function Sidebar() {

    const sidebar__varient = {
        hidden: {
            x: '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay:0.2, duration:0.7, type:'spring'
            }
        }
    }

    return (
        <motion.div className='sidebar '
            variants={sidebar__varient}
            initial='hidden'
            animate='visible'
        >
            <img src={img1} alt="avatar" width='120px' className='sidebar__avatar' />
            <div className="sidebar__name"><h2>NIBIR IMTIAZ</h2></div>
            <div className="sidebar__item sidebar__title"><span>Web Developer</span></div>
            <a href={resume} download='NibirImtiaz.pdf'>
                <div className="sidebar__item sidebar__resume">
                    <LibraryBooksIcon/>Download resume
                </div>
            </a>
            <figure className='sidebar__social-icons sidebar__mainIcons'>
                <a href='https://www.facebook.com/nick404.vikings/' className='sidebar__icon'><FacebookIcon /></a>
                <a href='https://twitter.com/nibir_imtiaz' className='sidebar__icon'><TwitterIcon /></a>
                <a href='https://www.instagram.com/nibir_imtiaz/' className='sidebar__icon'><InstagramIcon /></a>
                <a href='https://www.linkedin.com/in/nibir-imtiaz/' className='sidebar__icon'><LinkedInIcon /></a>
                <a href='https://github.com/nibir404' className='sidebar__icon'><GitHubIcon/></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                   <LocationOnIcon/><span>Dhaka, Bangladesh</span>
                </div>
                <div className="sidebar__item">
                    <LabelImportantIcon/><span>Nibirimtiaz1@gmail.com</span>
                </div>
                <div className="sidebar__item">
                   <PersonIcon/><span>01631450412</span>
                </div>
            </div>
        </motion.div>
    )
}
