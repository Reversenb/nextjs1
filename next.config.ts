import { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rmuti.ac.th',
        port: '',
        pathname: '/one/**',
        search: '',
      },
    ],
  },
}

export default config