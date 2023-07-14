import { generateSchemaTypes } from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
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
