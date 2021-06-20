import { createCookieSessionStorage, redirect } from "remix";
import invariant from "tiny-invariant";

import type { User } from "~/models/user.server";
import { getUserById } from "~/models/user.serv