import { apiKey } from "@/lib/apiKey";
import { TProvinceResult } from "@/types/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TProvinceResult | Data>
) {
  try {
    const response = await fetch(
      `https://api.rajaongkir.com/starter/province`,
      {
        method: "get",
        headers: {
          key: apiKey,
        },
      }
    );
    const result: TProvinceResult = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to get data" });
  }
}
