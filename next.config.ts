import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Resend on the server runtime only.
  serverExternalPackages: ["resend"],
};

export default nextConfig;
