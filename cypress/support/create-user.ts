// Use this to create a new user and login with that user
// Simply call this with:
// node --require esbuild-register ./cypress/support/create-user.ts username@example.com
// and it will log out the cookie value you can use to interact with the server
// as that new user.

import { parse } from "cookie";
import