import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/1-index",
        permanent: false, // or true, depending on whether it's a permanent redirect
      },
    ];
  },
};

export default withMDX(config);
