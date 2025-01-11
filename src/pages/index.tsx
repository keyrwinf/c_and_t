"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/theme-context";
import Card from "@/components/molecules/Card";
import { useJobs } from "@/services/api-hooks";
import FilterTags from "@/components/molecules/FilterTags";

export default function Home() {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const { data, error, isLoading } = useJobs();
  const [tagsClicked, setTagsClicked] = useState<string[]>([]);


  const filteredJobs = useMemo(() => {
    return data?.filter((job) => {
      return tagsClicked.every((tag) => job.languages.includes(tag));
    });
  }, [data, tagsClicked]);

  const handleTagClick = useCallback((tag: string) => {
    if (tagsClicked.includes(tag)) {
      setTagsClicked((prevTags) => prevTags.filter((t) => t !== tag));
    } else {
      setTagsClicked((prevTags) => [...prevTags, tag]);
    }
  }, [tagsClicked]);

  const handleRemoveTag = useCallback((tag: string) => {
    setTagsClicked((prevTags) => prevTags.filter((t) => t !== tag));
  }, []);

  const handleClearTags = useCallback(() => {
    setTagsClicked([]);
  }, []);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mobile:max-w-[90%]">
      {tagsClicked.length > 0 && <FilterTags tags={tagsClicked} onRemove={handleRemoveTag} onClear={handleClearTags} />}

      <h1 className="mobile:mb-10 tablet:mb-0">Jobs</h1>

      <div className="flex flex-col gap-4">
        {filteredJobs?.map((job) => (
          <Card
            key={job.id}
            onClick={() => router.push(`/job/${job.id}`)}
            job={job}
            tagsClicked={tagsClicked}
            onTagClick={handleTagClick}
          />
        ))}
      </div>
    </div>
  );
}

