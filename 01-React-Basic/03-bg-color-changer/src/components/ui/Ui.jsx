export const Button = ({ bgColor, buttonText, onClick }) => {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onClick} className={` px-5 py-2 rounded-md cursor-pointer`}>
      {buttonText}
    </button>
  );
};
