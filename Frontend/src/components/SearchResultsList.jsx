import "./SearchBar.css";
function SearchtResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div key={id} className="serach-result">
            {result.name}
          </div>
        );
      })}
    </div>
  );
}
export default SearchtResultsList;
