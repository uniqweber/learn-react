import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true});
  useGSAP(() => {
    timeline
      .from("#yellow-box", {x: -250, rotation: 360, borderRadius: "100%", duration: 2, ease: "back.inOut"})
      .to("#yellow-box", {y: 250, scale: 2, duration: 2})
      .to("#yellow-box", {x: 250, duration: 2})
      .to("#yellow-box", {x: 300, scale: 1, borderRadius: "8px", duration: 2});
    return () => timeline.kill();
  }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the <code>gsap.to()</code>, <code>gsap.from()</code>, and <code>gsap.fromTo()</code>{" "}
        methods, but the difference is that the <code>gsap.timeline()</code> method is used to create a timeline instance that can be used to manage
        multiple animations, while the <code>gsap.to()</code>, <code>gsap.from()</code>, and <code>gsap.fromTo()</code> methods are used to animate
        elements from their current state to a new state, from a new state to their current state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a href="https://greensock.com/docs/v3/GSAP/gsap.timeline()" target="_blank" rel="noreferrer noopener nofollow">
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="space-y-10 mt-20">
        <button
          onClick={() => {
            if (timeline.isActive()) {
              timeline.pause();
            } else {
              timeline.play();
            }
          }}
        >
          Play/Pause
        </button>

        <div id="yellow-box" className="bg-yellow-500 rounded-lg w-20 h-20" />
      </div>
    </main>
  );
};

export default GsapTimeline;
