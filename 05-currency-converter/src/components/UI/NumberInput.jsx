const NumberInput = ({ title, value, setFn }) => {
  return (
    <div className="border flex flex-col justify-between py-2 px-3 border-gray-200 rounded-lg h-18 overflow-hidden">
      <h5 className="text-left text-gray-500 text-xs ">{title}</h5>
      <input
        type="number"
        className=" text-[26px]  font-bold text-gray-800 outline-none bg-inherit "
        value={value}
        onChange={(e) => setFn(e.target.value)}
      />
    </div>
  );
};

export default NumberInput;
