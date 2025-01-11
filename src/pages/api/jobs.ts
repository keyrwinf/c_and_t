// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../public/data.json";
import { Job } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>,
) {
  return res.status(200).json(data);
}
