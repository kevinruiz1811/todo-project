import React, { useEffect } from "react";
import "./TodoSearch.css";

function TodoSearch({
  searchvalue,
  setSearchValue,
  loading,
  params,
  setParams,
}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);

    let params = {
      search: event.target.value,
    };

    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <input
      className="TodoSearch"
      onChange={onSearchValueChange}
      placeholder="Buscar TODO"
      value={searchvalue}
      disabled={loading}
    />
  );
}

export { TodoSearch };
