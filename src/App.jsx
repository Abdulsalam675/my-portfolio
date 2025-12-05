import { useEffect } from "react";
import Layout from "./pages/Layout";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    // Observe all elements with .animate-in
    document.querySelectorAll(".animate-in").forEach((el) => {
      observer.observe(el);
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []); // ← Empty array = run once on mount

  return <Layout />;
}

export default App;
