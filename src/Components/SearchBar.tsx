import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  navigateTo?: string;
  size?: "sm" | "lg";
  placeholder?: string;
}

const SearchBar = ({
  navigateTo = "/search",
  size = "sm",
  placeholder = "Search Store",
}: SearchBarProps): React.JSX.Element => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`${navigateTo}?category=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const height = size === "lg" ? "h-[60px]" : "h-[52px]";
  const textSize = size === "lg" ? "text-base" : "text-sm";

  return (
    <div className={`${height} bg-[#F2F3F2] rounded-[15px] flex items-center px-4`}>
      <AiOutlineSearch
        size={size === "lg" ? 24 : 20}
        className="text-gray-500 cursor-pointer"
        onClick={handleSearch}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`ml-3 flex-1 bg-transparent outline-none ${textSize}`}
      />
      {query.length > 0 && (
        <button onClick={() => setQuery("")} className="text-gray-400 text-lg">
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;