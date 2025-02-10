import { useState } from "react";
import { ConvertedResult, NumberInput, SelectInput, SwapButton } from "../components/UI";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/constants";

const Home = () => {
  const [result, setResult] = useState(null);
  const [amount, setAmount] = useState("1");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyFrom, setCurrencyFrom] = useState("INR");
  const [currencies] = useFetch(BASE_URL + "currencies");

  const [converted] = useFetch(`${BASE_URL}latest?base=${currencyFrom}&symbols=${currencyTo}`);

  const swapValue = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  const convertCurrency = () => {
    if (converted && converted.rates && converted.rates[currencyTo]) {
      const convertedAmount = parseFloat(amount) * converted.rates[currencyTo];
      setResult({
        convert: convertedAmount.toFixed(6),
        amount: amount,
        from: currencyFrom,
        to: currencyTo,
      });
    }
  };
  return (
    <main className="h-screen font-inter overflow-hidden bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center text-center relative">
      <div className=" ">
        <h1 className="text-white font-bold text-3xl uppercase">MS Currency Converter</h1>
        <p className="text-gray-200 mb-10">Check live foreign currency exchange rates</p>
        <div className="max-w-2xl relative z-10 bg-white border mb-10 border-gray-200 shadow-[0px_0px_150px] shadow-black/20 p-10 w-full rounded-2xl   ">
          <div className=" grid grid-cols-3 gap-2">
            <NumberInput resultFn={setResult} title="Amount" value={amount} setFn={setAmount} />
            <div className="col-span-2 grid grid-cols-2 gap-2 relative">
              <SelectInput title="From" value={currencyFrom} setFn={setCurrencyFrom} allCurrencies={currencies} />
              <SelectInput title="To" value={currencyTo} setFn={setCurrencyTo} allCurrencies={currencies} />
              <SwapButton swap={swapValue} />
            </div>
          </div>
          <div className="flex mt-7 items-end justify-between">
            {result && <ConvertedResult result={result} />}
            <button
              onClick={convertCurrency}
              className="bg-blue-700 text-white px-8 py-2 rounded-full focus:ring-blue-700 focus:ring-2 ring-offset-2 "
            >
              Convert
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white absolute inset-0 translate-y-1/2 rounded-full w-full z-0 "></div>
    </main>
  );
};

export default Home;
