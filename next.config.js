/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
          source: "/",
          destination: "/hosts/:host",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
            {
              type: "header",
              key: "accept-encoding",
              value: "(?<encoding>.*)",
            },
            {
              type: "query",
              key: "x",
              value: "(?<x>.*)",
            },
          ],
          source: "/headers/:slug*",
          destination: "/headers/:slug*/host/:host/encoding/:encoding/x/:x",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
            {
              type: "header",
              key: "accept-encoding",
              value: "(?<encoding>.*)",
            },
          ],
          source: "/headers/:slug*",
          destination: "/headers/:slug*/host/:host/encoding/:encoding/x/null",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
          source: "/headers/:slug*",
          destination: "/headers/:slug*/host/:host/encoding/null/x/null",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
          source: "/posts/:id",
          destination: "/hosts/:host/posts/:id",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
          source: "/posts",
          destination: "/hosts/:host/posts/post",
        },
        {
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
          source: "/slugs/:slug*",
          destination: "/hosts/:host/slugs/:slug*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
