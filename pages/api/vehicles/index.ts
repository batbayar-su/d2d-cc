import { VehicleStatus } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import type { VehiclesResponse } from "../../../types/responses";

type RequestBody = { id: string };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return processPost(req, res);
  } else if (req.method === "GET") {
    return processGet(req, res);
  }

  return res.status(404).end();
}

async function processGet(
  req: NextApiRequest,
  res: NextApiResponse<VehiclesResponse>
) {
  const activeVehicles = await prisma.vehicle.findMany({
    where: { status: VehicleStatus.READY },
    select: {
      refId: true,
      locations: {
        select: {
          longitude: true,
          latitude: true,
        },
        take: 2,
        orderBy: {
          sentAt: "desc",
        },
      },
    },
  });

  return res.status(200).json(activeVehicles);
}

async function processPost(req: NextApiRequest, res: NextApiResponse<void>) {
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
