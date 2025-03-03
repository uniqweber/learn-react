import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 200,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <main>
      <h1>Explore gsap.to()</h1>

      <div className="mt-20">
        <div id="blue-box" className="bg-blue-500 rounded-lg w-20 h-20" />
      </div>
    </main>
  );
};

export default GsapTo;
