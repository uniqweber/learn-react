const ConvertedResult = ({ result }) => {
  const { amount, from, to, convert } = result;
  return (
    <h2 className="text-3xl font-semibold text-gray-700 flex items-end  leading-8 ">
      <span className="text-xs text-gray-400 pr-2">
        {amount} {from} =
      </span>
      <span>{convert?.toString()?.slice(0, 5)}</span>
      <span className="text-gray-400">
        {convert?.toString()?.slice(5)} {to}
      </span>
    </h2>
  );
};

export default ConvertedResult;
