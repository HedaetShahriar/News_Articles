const countries = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "in", name: "India" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "jp", name: "Japan" },
  { code: "cn", name: "China" },
  { code: "ru", name: "Russia" },
  { code: "br", name: "Brazil" },
  { code: "za", name: "South Africa" },
];

const NewsFilters = ({
  filters = {},
  setFilters = () => {},
  onApply = () => {},
  onReset = () => {},
  sources = [],
}) => {
  return (
    <div className="card bg-base-200 p-4 shadow space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Country */}
      <div className="form-control">
        <label className="label">Country</label>
        <select
          onChange={(e) => {
            setFilters({ ...filters, country: e.target.value });
          }}
          defaultValue={filters.country || "select location"}
          className="select select-neutral"
        >
          <option disabled={true}>select location</option>
          {countries.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="form-control">
        <label className="label">Category</label>
        <div className="flex flex-wrap gap-2">
          {["business", "technology", "sports"].map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                filters.category === cat ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setFilters({ ...filters, category: cat })}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="form-control">
        <label className="label">Language</label>
        <select
          className="select select-bordered"
          value={filters.language}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
        >
          <option value="">Any</option>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      {/* Sources */}
      <div className="form-control">
        <label className="label">Sources</label>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-sm btn-outline">
            Select Sources
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-60 overflow-auto"
          >
            {sources.map((data, index) => (
              <li key={index}>
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    chedcked={filters.sources.includes(data.source?.name)}
                    onChange={() => {
                      const selected = filters.sources.includes(
                        data.source?.name,
                      )
                        ? filters.sources.filter((s) => s !== data.source?.name)
                        : [...filters.sources, data.source?.name];
                      setFilters({ ...filters, sources: selected });
                    }}
                  />
                  {data.source?.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Status */}
      <div className="form-control">
        <label className="label">Status</label>
        <div className="flex gap-3">
          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              className="radio"
              checked={filters.status === "active"}
              onChange={() => setFilters({ ...filters, status: "active" })}
            />
            Active
          </label>
          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              className="radio"
              checked={filters.status === "archived"}
              onChange={() => setFilters({ ...filters, status: "archived" })}
            />
            Archived
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 pt-2">
        <button className="btn btn-sm btn-outline" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-sm btn-primary" onClick={onApply}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};
export default NewsFilters;
