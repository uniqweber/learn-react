const SelectInput = ({ value, setFn, title, allCurrencies }) => {
  return (
    <div className="border flex flex-col justify-between py-2 px-5 border-gray-200 rounded-lg h-18 overflow-hidden">
      <h5 className="text-left text-gray-500 text-xs ">{title}</h5>
      <select
        type="text"
        className=" text-[25px] font-bold text-gray-800 outline-none bg-inherit placeholder:text-gray-800 appearance-none"
        value={value}
        onChange={(e) => setFn(e.target.value)}
      >
        {allCurrencies &&
          Object.keys(allCurrencies).map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
