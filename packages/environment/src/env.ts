// import { config } from "dotenv";
// import { expand } from "dotenv-expand";
// import { ZodError, z } from "zod";

// const stringBoolean = z.coerce
//   .string()
//   .transform((val) => {
//     return val === "true";
//   })
//   .default("false");

// const EnvSchema = z.object({
//   PORT: z.string().default("9000"),
//   NODE_ENV: z.string().default("development"),
//   LIVE_CLIENT: z.string().default("http://localhost:3000"),

//   //   DB_HOST: z.string(),
//   //   DB_USER: z.string(),
//   //   DB_PASSWORD: z.string(),
//   //   DB_NAME: z.string(),
//   //   DB_PORT: z.coerce.number(),
//   DATABASE_URL: z.string(),
//   DB_MIGRATING: stringBoolean,
//   DB_SEEDING: stringBoolean,

//   //   ACCESS_TOKEN_SECRET: z.string(),
//   //   REFRESH_TOKEN_SECRET: z.string(),

//   //   ACCESS_TOKEN_EXPIRES_IN: z.string(),
//   //   REFRESH_TOKEN_EXPIRES_IN: z.string(),
//   //   REFRESH_TOKEN_COOKIE_NAME: z.string().default("refresh_token"),

//   //   TRANSPORT_USER_EMAIL: z.string(),
//   //   TRANSPORT_USER_APP_PASSWORD: z.string(),

//   //   RESET_TOKEN_EXPIRES_IN: z.string(),
//   //   VERIFICATION_TOKEN_EXPIRES_IN: z.string(),

//   //   UPSTASH_REDIS_REST_URL: z.string(),
//   //   UPSTASH_REDIS_REST_TOKEN: z.string(),
// });

// export type EnvSchema = z.infer<typeof EnvSchema>;

// expand(config());

// (() => {
//   try {
//     EnvSchema.parse(process.env);
//   } catch (error) {
//     if (error instanceof ZodError) {
//       let message = "Missing required values in .env:\n";
//       error.issues.forEach((issue) => {
//         message += issue.path[0] + "\n";
//       });
//       const e = new Error(message);
//       e.stack = "";
//       throw e;
//     } else {
//       console.error(error);
//     }
//   }
// })();

// export default EnvSchema.parse(process.env);
