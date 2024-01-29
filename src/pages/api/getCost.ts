import { apiKey } from "@/lib/apiKey";
import { TCostResult, TProvinceResult } from "@/types/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TCostResult | Data>
) {
  const { origin, destination, weight } = req.query;
  try {
    const response = await fetch(`https://api.rajaongkir.com/starter/cost`, {
      method: "post",
      body: JSON.stringify({
        origin: origin,
        destination: destination,
        weight: weight,
        courier: "jne",
      }),
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
    });
    const result: TCostResult = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to get data" });
  }
}
