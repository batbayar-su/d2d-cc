import { VehicleStatus } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type RequestBody = { lat: number; lng: number; at: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<void>) {
  if (req.method !== "POST") return res.status(404).end();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).end();
  }

  const vehicle = await prisma.vehicle.findFirst({
    where: { refId: id, status: VehicleStatus.READY },
  });

  if (!vehicle) {
    return res.status(404).end();
  }

  const { lng, lat, at } = req.body as RequestBody;
  await prisma.location.create({
    data: {
      longitude: lng.toString(),
      latitude: lat.toString(),
      sentAt: at,
      vehicleId: vehicle.id,
    },
  });

  res.status(204).end();
}
