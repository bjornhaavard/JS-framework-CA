import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = () => {
  const query = "search";

  return (
    <Form action="/" className="search-form">
      <input name="query" defaultValue={""} className="search-input" placeholder="Search for products" />

      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
      </button>
    </Form>
  );
};

export default SearchForm;
