import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (newSearchQuery: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSearch(e.target.value);
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}