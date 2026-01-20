import React, { useEffect, useState } from "react";
import fetchAllData, { fetchFilteredData, saveDataToDB } from "../utils/data";
import Card from "../components/News/Card";
import NewsFilters from "../components/News/Filter";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    country: "",
    category: "",
    sources: [],
    language: "",
    status: "",
  });
  const onReset = () => {
    setFilters({
      country: "us",
      category: "",
      sources: [],
      language: "",
      status: "",
    });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchAllData();
      setData(data.articles);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  const onApply = async () => {
    setLoading(true);
    const data = await fetchFilteredData(filters);
    setData(data.articles);
    await saveDataToDB(data.articles);
    setLoading(false);
  };

  console.log(filters);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-wrap mb-10 justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Top News</h1>
        {/* <select
          onChange={handleCountryChange}
          defaultValue={selectedCountry}
          className="select select-neutral"
        >
          <option disabled={true}>select location</option>
          {countries.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select> */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filters
          </div>
          <div
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <NewsFilters
              filters={filters}
              setFilters={setFilters}
              onApply={onApply}
              onReset={onReset}
              sources={data}
            />
          </div>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      ) : (
        <div className="h-screen text-center">No data available</div>
      )}
    </div>
  );
};

export default Homepage;
