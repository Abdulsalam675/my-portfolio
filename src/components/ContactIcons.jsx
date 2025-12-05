import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiGithub } from "react-icons/fi";

function ContactIcons() {
  return (
    <div className="flex gap-4 ">
      <a
        href="https://github.com/Abdulsalam675"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="GitHub"
      >
        <FiGithub size={19} />
      </a>
      <a
        href="https://wa.me/+2347030521327"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-green-700 transition-colors"
        aria-label="Whatsapp"
      >
        <BsWhatsapp size={19} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61582685998787"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Facebook"
      >
        <FiFacebook size={19} />
      </a>
    </div>
  );
}

export default ContactIcons;
