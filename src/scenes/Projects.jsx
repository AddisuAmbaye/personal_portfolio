import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, body, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {body}
          </p>
        </div>
        <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
      </motion.div>
    </a>
  );
};

const UpworkProfile = () => {
  return (
    <motion.div 
      variants={projectVariant}
      className="relative bg-white p-8 rounded-lg shadow-xl max-w-[400px] max-h-[400px] overflow-hidden mt-10 border-2 border-gold"
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-playfair font-semibold text-deep-blue">Upwork Profile</h3>
        <p className="text-sm text-gray-600 mt-2">Top Rated Full Stack Developer</p>
        
        <div className="mt-4 w-full">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Job Success</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 w-full">
          <div className="bg-light-grey p-2 rounded">
            <p className="font-bold text-deep-blue">8+</p>
            <p className="text-xs">Clients</p>
          </div>
          <div className="bg-light-grey p-2 rounded">
            <p className="font-bold text-deep-blue">5.0</p>
            <p className="text-xs">Rating</p>
          </div>
        </div>
        
        <a 
          href="https://www.upwork.com/freelancers/~019cd121aea196ef4c" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 bg-gold text-white rounded-full font-semibold hover:bg-dark-gold transition duration-300"
        >
          View Profile
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-25 pb-25">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project 
            title="Project 1" 
            body={'web app to provide information and set appointment to patients.'} 
            link={'https://github.com/AddisuAmbaye/Meet-My-Doctor'} 
          />
          <Project 
            title="Project 2" 
            body={'college application website for ethiopians'} 
            link={'https://github.com/TsehaynehGetaneh/JointApplication'} 
          />
          <Project 
            title="Project 3" 
            body={'Lookup, the Social Media for Sociopaths!'} 
            link={'https://github.com/AddisuAmbaye/lookup-social-media'} 
          />

          <div className="mt-2"></div>
          <UpworkProfile />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
