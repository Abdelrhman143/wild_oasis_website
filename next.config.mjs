/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://tnkjcgrvirublbatmdcc.supabase.co/**")],
  },
};

export default nextConfig;
