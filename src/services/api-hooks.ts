import { useQuery } from "@tanstack/react-query";
import { Job } from "@/types";
import { fetchJobs } from "./api";

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: fetchJobs
  });
}