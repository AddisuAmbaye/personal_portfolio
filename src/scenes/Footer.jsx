import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="w-11/12 mx-auto text-center md:text-left">
        <SocialMediaIcons />
        <div className="md:flex justify-between mt-10">
          <p className="font-playfair font-semibold text-3xl text-white">
            Addisu Ambaye
          </p>
          <p className="font-playfair text-md text-gray-300 mt-3 md:mt-0">
            ©{new Date().getUTCFullYear()} ADDISU. All Rights Reserved.
          </p>
        </div>
        <div className="md:flex justify-center md:justify-start mt-8">
          <ul className="flex flex-wrap space-x-4 md:space-x-8 text-2xl text-gray-300 justify-center md:justify-start">
            <li className="hover:text-white transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white transition duration-300">
              <a href="#">About</a>
            </li>
            <li className="hover:text-white transition duration-300">
              <a href="#">Portfolio</a>
            </li>
            <li className="hover:text-white transition duration-300">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
