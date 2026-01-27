const FiltersBar = ({ filters, setFilters }) => {
  return (
    <div className="bg-white border rounded-2xl p-4 flex flex-col lg:flex-row gap-4">
      <input
        type="text"
        placeholder="Search test..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
        className="flex-1 px-4 py-3 rounded-xl border"
      />

      <select
        value={filters.questionType}
        onChange={(e) =>
          setFilters({ ...filters, course: e.target.value })
        }
        className="px-4 py-3 rounded-xl border"
      >
        <option>All</option>
        <option>Objective</option>
        <option>Subjective</option>
      </select>

      <select
        value={filters.difficulty}
        onChange={(e) =>
          setFilters({ ...filters, difficulty: e.target.value })
        }
        className="px-4 py-3 rounded-xl border"
      >
        <option>All</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
};

export default FiltersBar;
