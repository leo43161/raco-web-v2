import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  /* cambiar el basepath cuando este en produccion */
  basePath: process.env.NODE_ENV === 'production' ? '/v2' : '', // Importante para el subdirectorio
  images: { unoptimized: true },
  trailingSlash: true,
  reactCompiler: true,
};

export default nextConfig;
