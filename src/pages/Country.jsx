import { useEffect, useState } from "react";

function Country() {
  const [countries, setCountries] = useState([]);
  const [errors, setError] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${input ? `/name/${input}` : "all"}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let country = res;
        setCountries(country);
      })
      .catch((err) => setError(err));
  }, [input]);

  return (
    <div className="flex flex-col mt-10 items-center overflow-x-hidden justify-start">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search by name"
        className=" w-80 h-10 rounded-xl bg-slate-50 border-2 border-black"
      />
      <div className="grid grid-cols-5 gap-6 m-5">
        {countries.map((item) => (
          <div
            className="flex overflow-x-clip flex-col items-start justify-start"
            key={item.flag}
          >
            <img
              className="h-32 w-full border border-slate-500"
              src={item.flags.png}
              alt={`a flag of ${item.name.common}`}
            />
            <p className="flex gap-2 items-center justify-center">
              Country:
              <div className="flex w-80 overflow-x-scroll no-scrollbar">
                <p className="flex   flex-nowrap">
                  <span className="w-[400px] flex overflow-x-scroll  flex-nowrap">
                    {item.name.official}
                  </span>
                </p>
              </div>
            </p>
            <p>Capital: {item.capital}</p>
            <p>Population: {item.population}</p>
            <p>Independence: {item.independent ? "True" : "False"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country;
