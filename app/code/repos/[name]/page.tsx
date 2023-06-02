import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React from "react";

function RepoPage({ params }: { params: { name: string } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Repo name={params.name} />
      <RepoDirs name={params.name} />
    </div>
  );
}

export default RepoPage;
