export function getBaseUrl() {
  const fromEnv = process.env.BASE_URL;
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "http://localhost:3000";
}
