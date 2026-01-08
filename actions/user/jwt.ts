function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function getJwtSecret() {
  return requireEnv("ACCESS_TOKEN_SECRET");
}
