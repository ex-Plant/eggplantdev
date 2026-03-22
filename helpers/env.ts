import { z } from "zod";

const envSchema = z.object({
  // Site
  NEXT_PUBLIC_SITE_URL: z.string().url(),

  // SMTP (server-only)
  EMAIL_HOST: z.string().min(1),
  EMAIL_USER: z.email(),
  EMAIL_PASS: z.string().min(1),
  EMAIL_TO: z.email(),
});

type EnvT = z.infer<typeof envSchema>;

function validateEnv(): EnvT {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error("Invalid environment variables:", error);
    process.exit(1);
  }
}

export const env = validateEnv();
