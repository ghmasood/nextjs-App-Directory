import React from "react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

async function Repo({ name }: { name: string }) {
  const repo = await ferchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
}

export default Repo;

const ferchRepo = async (name: string) => {
  const res = await fetch(`https://api.github.com/repos/ghmasood/${name}`, {
    next: { revalidate: 600 },
  });
  const repo = await res.json();
  return repo;
};
