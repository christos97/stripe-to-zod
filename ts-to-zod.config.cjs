/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = {
  input: "src/stripe/stripeSchemas.ts",
  output: "src/stripe/stripeSchemas.zod.ts",
};
