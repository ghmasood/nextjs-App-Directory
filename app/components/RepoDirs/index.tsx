import Link from "next/link";
import React from "react";

async function RepoDirs({ name }: { name: string }) {
  const contents = await fetchRepoContennts(name);
  const dirs = contents.filter((content: any) => content.type === "dir");
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;

async function fetchRepoContennts(name: string) {
  await new Promise((res) => setTimeout(res, 3000));
  const res = await fetch(
    `https://api.github.com/repos/ghmasood/${name}/contents`
  );
  const contents = await res.json();
  return contents;
}
