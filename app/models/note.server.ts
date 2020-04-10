import { prisma } from "~/db.server";

export function getNote({ userId, id }: { userId: string; id: string }) {
  return prisma.note.findFirst({
    where: { id, userId },
  });
}

export function getNoteListItems({ userId }: { userId: string }) {
  return prisma.note.findMany({
    where: { userId: use