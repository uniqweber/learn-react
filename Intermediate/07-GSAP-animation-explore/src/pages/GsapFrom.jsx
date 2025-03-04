import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 200,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
    // form er kaj holo. she age thekei sore thakbe tar position theke. and pore tar position e ferot ashbe eitai hocche from. mane tar position jodi 0 hoy. ebong amra jodi boli gsap.from(id,{x:200}) tar mane she 200 porjonto shore thakbe. reload diyar sathe dekhabe j she 200 theke 0 er dike ashtese
  }, []);
  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the <code>gsap.to()</code> method, but the difference is that the <code>gsap.from()</code>{" "}
        method animates elements from a new state to their current state, while the <code>gsap.to()</code> method animates elements from their current
        state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a href="https://greensock.com/docs/v3/GSAP/gsap.from()" target="_blank" rel="noreferrer noopener nofollow">
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="bg-green-500 rounded-lg w-20 h-20" />
      </div>
    </main>
  );
};

export default GsapFrom;
