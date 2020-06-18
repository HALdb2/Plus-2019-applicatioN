// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderFunction } from "remix";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  const host =
    request.headers.get("X-Forwar