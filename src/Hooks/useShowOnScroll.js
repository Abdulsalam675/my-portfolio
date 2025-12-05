// CUSTOM HOOK TO LISTEN FOR WINDOW SCROLL EVENT
import { useEffect, useState } from "react";

function useShowOnScroll(value) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY >= value);
    }
    window.addEventListener("scroll", handleScroll);

    // CLEAN UP THE EVENT LISTENER
    return () => removeEventListener("scroll", handleScroll);
  }, [value]);

  return show;
}

export default useShowOnScroll;
