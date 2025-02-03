import { useState } from "react";
import { Button } from "./components/ui/UI";

const App = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
    "black",
  ];
  const [currentColor, setCurrentColor] = useState("");
  return (
    <main
      style={{ backgroundColor: currentColor }}
      className=" duration-300 flex items-end justify-center pb-4 flex-wrap h-screen text-white"
    >
      <div className="flex items-center border-2 gap-4  mx-auto bg-white rounded-md p-4 ">
        {colors.map((color, index) => (
          <Button
            key={index}
            bgColor={color}
            buttonText={color}
            onClick={() => setCurrentColor(color)}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
