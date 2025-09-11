import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 inline-flex items-center justify-center w-11 h-11 rounded-full border border-base surface shadow-smx hover:shadow-mdx focus-ring transition text-[15px] font-medium text-soft backdrop-blur-sm ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-3"
      }`}
    >
      ↑
    </button>
  );
};

export default BackToTop;
