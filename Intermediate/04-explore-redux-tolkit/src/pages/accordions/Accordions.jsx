import { useState } from "react";

const Accordions = () => {
  const [showAccordion, setShowAccordion] = useState(null);
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className=" w-full max-w-xl ">
        <div className="text-white font-medium tracking-wide">
          <h2 className="text-3xl">FAQ 🤨</h2>
          <p className="text-gray-400 font-normal"> Frequently asked questions</p>
        </div>
        <div className="mt-5 space-y-3">
          {Array.from({ length: 5 }).map((id, index) => (
            <div key={index} className="bg-white ">
              <h3
                onClick={() => (showAccordion === index ? setShowAccordion(null) : setShowAccordion(index))}
                className="text-2xl font-medium tracking-wide px-5 py-2"
              >
                <span>What is the name of your company?</span>
                <span className="float-right">{showAccordion === index ? <span>👆</span> : <span>👇</span>}</span>
              </h3>
              <p className={`text-gray-500 bg-white px-5 overflow-hidden duration-300  flex items-center ${showAccordion === index ? "h-16 opacity-100" : "h-0 opacity-0"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint doloremque deserunt, saepe eum modi incidunt animi iure aliquam
                dicta.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordions;
