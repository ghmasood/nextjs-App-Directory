"use client";
import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourse();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={(results: any) => setCourses(results)} />
      <Courses coursess={courses} />
    </>
  );
}

export default HomePage;
