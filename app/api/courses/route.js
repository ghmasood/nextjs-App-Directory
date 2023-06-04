import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const course = await request.json();
  courses.push(course);
  return NextResponse.json({ message: "course added" });
}
