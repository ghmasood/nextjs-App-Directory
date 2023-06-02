import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

function RepoPage({ params }: { params: { name: string } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading Dirs...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
