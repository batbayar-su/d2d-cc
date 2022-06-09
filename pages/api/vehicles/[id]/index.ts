import { VehicleStatus } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type RequestQuery = { id: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<void>) {
  if (req.method !== "DELETE") return res.status(404).end();

  const { id } = req.query as RequestQuery;

  await prisma.vehicle.upsert({
    where: {
      refId: id,
    },
    update: {
      status: VehicleStatus.NOT_READY,
    },
    create: {
      refId: id,
      status: VehicleStatus.NOT_READY,
    },
  });

  res.status(204).end();
}
