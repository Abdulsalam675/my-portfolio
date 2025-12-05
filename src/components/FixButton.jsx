import { FiArrowUp } from "react-icons/fi";
import useShowOnScroll from "../Hooks/useShowOnScroll";

function FixButton() {
  const showButton = useShowOnScroll(270);

  return (
    <a
      href="#"
      className={`
        fixed bottom-5 right-6 z-50 h-9 w-9
        sm:h-11 sm:w-11 rounded-full 
        bg-gray-200 hover:bg-gray-300
        flex items-center justify-center 
        text-gray-800 shadow-4xl
        ${
          showButton
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-75 invisible pointer-events-none"
        }
        transition-all duration-300 ease-in-out
        will-change-transform
      `}
    >
      <FiArrowUp size={15} />
    </a>
  );
}

export default FixButton;
