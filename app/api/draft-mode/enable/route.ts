// src/app/api/draft-mode/enable/route.ts

import { createClient } from "@sanity/client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: createClient({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
});
