import { generateSchemaTypes } from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";

const config = defineConfig({
  stripe: {
    from: {
      source: "url",
      url: "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json",
    },
    outputDir: "src/stripe",
    to: async (context) => {
      await generateSchemaTypes(context, {
        filenamePrefix: "stripe",
      });
    },
  },
});

export default config;
