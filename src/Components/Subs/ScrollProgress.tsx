import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = scrollTop / docHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateProgress);
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.75 z-9999 bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-white origin-left transform-gpu"
      />
    </div>
  );
};

export default ScrollProgress;
