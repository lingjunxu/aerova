import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
}

export default nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
