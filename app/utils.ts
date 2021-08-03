import { useMemo } from "react";
import { useMatches } from "remix";

import type { User } from "~/models/user.server";

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using