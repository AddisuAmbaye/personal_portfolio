import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const isMobile = useMediaQuery("(max-width: 767px)"); // Add this media query for mobile

  return (
    <section
      id="home"
      className={`md:flex md:justify-between md:items-center gap-16 md:h-full py-10 ${
        isMobile ? "flex-col-reverse justify-center items-center" : "" // Stack elements in reverse order on mobile and center them
      }`}
    >
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className={`text-6xl font-playfair z-10 text-center ${
              isMobile ? "text-4xl" : "md:text-start"
            }`}
          >
            Addisu {""}
            <span
              className={`xs:relative xs:text-deep-blue xs:font-semibold z-20 ${
                isMobile
                  ? "text-2xl"
                  : "xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              }`}
            >
              Ambaye
            </span>
          </p>

          <p
            className={`mt-7 mb-5 text-sm text-center ${
              isMobile ? "text-base" : "md:text-start"
            }`}
          >
            I am passionate full-stack developer committed to crafting exceptional digital experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className={`flex mt-5 ${isMobile ? "flex-col" : "justify-center md:justify-start"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className={`bg-gradient-ocean text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 ${
                isMobile ? "mb-3 w-full text-center" : "whitespace-nowrap"
              }`}
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className={`rounded-r-sm bg-gradient-sunset py-0.5 pr-0.5 ${
              isMobile ? "mb-3 w-full text-center" : ""
            }`}
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair whitespace-nowrap">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className={`flex mt-2 ${isMobile ? "justify-center" : "justify-start"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <div
        className={`basis-3/5 z-10 mt-12 md:mt-25 flex justify-center ${
          isMobile ? "mb-8" : "md:order-2"
        }`}
      >
        {isAboveLarge ? (
          <div
            className={`relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[300px]
            before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1] ${
              isMobile ? "ml-0" : ""
            }`}
          >
            <img
              alt="profile"
              className={`hover:filter rounded-3xl hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] h-auto ${
                isMobile ? "max-w-[200px]" : ""
              }`}
              src="assets/profile-min.jpeg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className={`z-10 w-full max-w-[300px] md:max-w-[400px] h-auto rounded-3xl ${
              isMobile ? "max-w-[200px]" : ""
            }`}
            src="assets/profile-min.jpeg"
          />
        )}
      </div>
    </section>
  );
};

export default Landing;
