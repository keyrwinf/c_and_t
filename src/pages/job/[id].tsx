// src/pages/job/[id].tsx
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface JobPageProps {
  job: Job | null;
  error: string | null;
}

const JobPage: NextPage<JobPageProps> = ({ job, error }) => {
  if (error) {
    return (
      <div className="text-red-500">
        <h1>{error}</h1>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-gray-500">
        <h1>Job not found</h1>
      </div>
    );
  }

  return (
    <div className="container mobile:max-w-[90%]">
      <Link href="/" className="text-md font-bold">Go Back</Link>
      <div className="flex gap-4 items-center mt-12 mb-4">
        <Image src={job.logo} alt={job.company} width={100} height={100} />
        <h5 className="text-md font-bold">
          {job.company}
        </h5>
      </div>
      <p className="text-md mt-2">
        Position: {job.position}
      </p>
      <p className="text-md mt-2">
        Contract: {job.contract}
      </p>
      <p className="text-md mt-2">
        Location: {job.location}
      </p>
      {job.languages.length > 0 && (
        <p className="text-md mt-2">
          Languages: {job.languages.join(', ')}
        </p>
      )}
      {job.tools.length > 0 && (
        <p className="text-md mt-2">
          Tools: {job.tools.join(', ')}
        </p>
      )}
      <div className="mt-4">
        <span className="font-semibold">Salary: </span>
        $100,000
      </div>
    </div>
  );
};

export default JobPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;

  try {
    // Fetch the list of jobs from the API
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/jobs`);
    const jobs = await response.json();
    
    // Find the job with the corresponding id
    const job = jobs.find((job: Job) => `${job.id}` === `${id}`);
    console.log({ job });
    
    if (!job) {
      return {
        props: {
          job: null,
          error: 'Job not found',
        },
      };
    }

    return {
      props: {
        job,
        error: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        job: null,
        error: 'Failed to fetch job details',
      },
    };
  }
};
