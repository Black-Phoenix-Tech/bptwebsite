/* eslint-disable no-unused-vars */
const path = require("path");

const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
    },
    {
        key: "Access-Control-Allow-Origin",
        value: "*",
    },
    /**
     {
     key: "Content-Security-Policy",
     value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
     },
     */
];

const nextConfig = {
    poweredByHeader: false,
    async rewrites() {
        return [];
    },
    eslint: {
        dirs: ["pages", "common", "screens", "src"],
    },
    experimental: {
        // Defaults to 50MB
        isrMemoryCacheSize: 0, // cache size in bytes
    },
    /** Module federation setup for micro frontend
     * webpack: (
     config,
     { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
     ) => {
     config.plugins.push(
     new NextFederationPlugin({
     name: "{{PROJECT_NAME}}",
     remotes: {
     },
     filename: "static/chunks/remoteEntry.js",
     })
     );
     return config;
     },
     */
    reactStrictMode: false,
    images: {
        domains: [],
        minimumCacheTTL: 60 * 60 * 4,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "dist")],
    },
    env: {
        GOOGLE_ANALYTICS_API_ID: process.env.GOOGLE_ANALYTICS_API_ID,
        SENTRY_DSN: process.env.SENTRY_DSN,
        CORE_URL: process.env.CORE_URL,
    },
    sentry: {
        disableServerWebpackPlugin: true,
        disableClientWebpackPlugin: true,
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },
};

const sentryWebpackPluginOptions = {
    silent: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig, sentryWebpackPluginOptions);

/*
module.exports = withPWA({
  nextConfig,
});
**/
