import { Form, json, useLoaderData, Outlet, Link, NavLink } from "remix";
import type { LoaderFunction } from "remix";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";

type LoaderData = {
  n