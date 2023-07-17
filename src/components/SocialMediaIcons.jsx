const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-center my-10 gap-7"> {/* Updated 'justify-start' to 'justify-center' */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/addis-ambaye-02a598210/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://t.me/addisama"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="telegram-link" src="../assets/telegram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/addis.ambaye.7"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/addis_ama/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
