import { VehicleStatus } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type RequestBody = { id: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<void>) {
  if (req.method !== "POST") return res.status(404).end();

  const { id } = req.body as RequestBody;
  await prisma.vehicle.upsert({
    where: {
      refId: id,
    },
    update: {
      status: VehicleStatus.READY,
    },
    create: {
      refId: id,
      status: VehicleStatus.READY,
    },
  });

  res.status(204).end();
}
