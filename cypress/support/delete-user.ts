// Use this to delete a user by their email
// Simply call this with:
// node --require esbuild-register ./cypress/support/delete-user.ts username@example.com
// and that user will get deleted

import { installGlobals } from "@remix-run/node/globals";
import