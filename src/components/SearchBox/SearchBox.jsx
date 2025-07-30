import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        className={css.searchInput}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
