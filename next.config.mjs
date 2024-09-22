/** @type {import('next').NextConfig} */
const nextConfig = {
  //client side caching for 30 seconds
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        // pathname is my specific path using the app id so that no one can access my backend to resize their next image by server
        pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
      },
    ],
  },
  rewrites:()=>{
    return [
      {
       source: "/hashtag/:tag",
       destination: "/search?q=%23:tag", 
      }
    ]
  }
};

export default nextConfig;
