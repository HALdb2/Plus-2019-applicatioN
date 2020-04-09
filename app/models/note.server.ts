import { prisma } from "~/db.server";

export function getNote({ userId, id }: { userId: string; id: string }) {
  return prisma.note.fi