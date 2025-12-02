
import { motion} from "framer-motion";
import verl1 from "../assets/projects/Sketchesverl3.png"
export const Projects = () => {


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
    return (
    <motion.section 
    id = "projects"
    className="projects"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once: true}} /*animation only starts when projects is in viewport*/
    transition={{duration:0.6}}
    >

        <motion.h2 
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        >
            My Projects
        
            <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            >
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: {duration: 0.2}}}
                >

                    <motion.div 
                        className="project-image"
                        style={{backgroundImage: `url(${verl1})` }}
                        whileHover={{scale:1.05, transition: {duration:0.2}}}
                        whileTap={{scale:0.95}}
                    />
                        <h3> WIP</h3>
                        <p>
                            A simple template for futures projects, truly 
                            nothing is happening on this filler project card
                            at the moment, but something may be added later.
                        </p>
                        <div className="project-tech">
                            <span>::[X]::</span>
                            <span>::[X]::</span>   
                        </div>
                    
                </motion.div>

                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: {duration: 0.2}}}
                >
                    
                    <motion.div 
                        className="project-image"
                        style={{backgroundImage: `url(${verl1})` }}
                        whileHover={{scale:1.05, transition: {duration:0.2}}}
                        whileTap={{scale:0.95}}
                    />
                        <h3> WIP</h3>
                        <p>
                            A simple template for futures projects, truly 
                            nothing is happening on this filler project card
                            at the moment, but something may be added later.
                        </p>
                        <div className="project-tech">
                            <span>::[X]::</span>
                            <span>::[X]::</span>   
                        </div>
                    
                </motion.div>
                
                

                

                
            </motion.div> 
        </motion.h2>
    </motion.section>
    );

};