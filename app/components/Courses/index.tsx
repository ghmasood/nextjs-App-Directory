import Link from "next/link";
import React from "react";

function Courses({ coursess }: { coursess: any[] }) {
  // const coursess = await getCourses();

  return (
    <div className="courses">
      {coursess &&
        coursess?.map((item: any) => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <small>Level: {item.level}</small>
            <p>{item.description}</p>
            <Link href={item.link} target="_blank" className="btn">
              Go To Course
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Courses;

// async function getCourses() {
//   const res = await fetch("http://localhost:3000/api/courses");
//   const courses = await res.json();
//   return courses;
// }
