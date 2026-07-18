import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "fh-marketplace",
    framework: "nextjs",
    env: ".env",
  },
});
