/** @type {import('next').NextConfig} */
const nextConfig = {
    //client side caching for 30 seconds
    experimental : {
        staleTimes : {
            dynamic:30
        }
    }
};

export default nextConfig;
