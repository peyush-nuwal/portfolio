import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
});

const nextConfig: NextConfig = {
  /* your config options here */
};

export default withBundleAnalyzer(nextConfig);
