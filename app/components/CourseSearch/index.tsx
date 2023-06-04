"use client";
import React, { useState } from "react";

function CourseSearch({ getSearchResults }: any) {
  const [query, setQuery] = useState<string>("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="search Courses ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        search
      </button>
    </form>
  );
}

export default CourseSearch;
