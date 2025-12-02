import { motion } from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SketchesVerl from "../assets/token/Sketchesverl1.png"
const fadeInUp = {
    initial: {opacity: 0, y:20},
    animate: {opacity: 1, y:0},
    transition:  {duration: 0.6 },
};
const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        },
    },
};

export const Hero = () => {
    return (
    <motion.section 
    id ="home"
    className = "hero"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duriation:0.8, delay: 0.2}}
    >
    <div 
    className="hero-container">
        <motion.div 
        className="hero-content"
        variants={staggerContainer}
        initial ="initial"
        animate="animate"
        >
            <motion.div className="hero-badge">
                <span> Hello, I'm </span>
            </motion.div>
            <br/>
            <motion.img src= {SketchesVerl} alt= "profile picture"/>
            
            <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.9}}
            >
                Verlaunte Hawkins
            </motion.h1>
            <motion.h2 className="hero-subtitle"
            variants={fadeInUp}>
                Computer Science Student
            </motion.h2>
            <motion.p className="hero-description"
            variants={fadeInUp}> 
                work in progress
            </motion.p>

            <motion.div 
            className="cta-buttons" 
            variants = {staggerContainer}
            >
                <motion.a
                href="#projects"
                className="cta-primary"
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                >
                    View my Work
                </motion.a>
                <motion.a
                href="#contact"
                className="cta-secondary"
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                >
                    Contact Me
                </motion.a>
            </motion.div>
            <motion.div
                className="social-links"
                variants={staggerContainer}
                >
                    <motion.a href="https://github.com/" target="_blank">
                        <i className="fab fa-github"></i>
                    </motion.a>

                    <motion.a href="https://www.instagram.com/cursingjam/"
                        target = "_blank">
                        <i className="fa-brands fa-instagram "></i>
                    </motion.a >

                    <motion.a href="https://www.instagram.com/cursingjam/"
                        target = "_blank">
                        <i className="fa-brands fa-twitter "></i>
                    </motion.a>
            </motion.div>
        </motion.div>

        <motion.div 
        className="hero-image-container" 
        initial={{opacity:0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0.8, delay: 0.4}}
        >
            <div className="code-display">
                <SyntaxHighlighter 
                language="javascript"
                customStyle={{
                    margin: 0, 
                    padding: "2rem", 
                    height: "100%",
                    borderRadius: "20px",
                    background: "rgba(30, 41, 59, 0.7)",
                    backdropFilter: "blur(10px)",
                    marginBottom: 50,
                }}
                style = {vscDarkPlus}

                >
                {`const aboutMe: DeveloperProfile = {
codename: "Verlaunte Hawkins",
role: "Computer Science Student"
stack: {
    languages: ["C", "Godot", "Java", "JavaScript", "Python"],
    frameworks: ["React"],
},
Other Interest:[ 
    "Drawing", 
    "Dungeon Meshi franchise", 
    "TRPGS", 
    "learning game development",
    "playing ttrpgs",
    ],
missionStatement:
    "Struggling through coding langauges one debug at a time",
};`}
                </SyntaxHighlighter>
            </div>
            <motion.div 
            className="floating-card"
            animate = {{y: [0, -10,0], rotate: [0, 2, 0]}}
            transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}>
                <div className="card-content">
                    <span className="card-text">
                        currently working on some art!
                    </span>
                </div>
            </motion.div>

        </motion.div>
    </div>
    </motion.section>
    );
};