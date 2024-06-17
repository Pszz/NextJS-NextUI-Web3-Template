/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'prefixIds',
                  active: false,
                },
              ],
            },
          },
        },
        'url-loader',
      ],
    })
    return config
  },
  // cache
  headers: async () => {
    if (process.env.NODE_ENV !== 'production') {
      return []
    }
    return [
      {
        source: '/:all*',
        locale: false,
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://ssl.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' 'unsafe-inline' https://*; font-src 'self' 'unsafe-inline' https://fonts.gstatic.com; frame-src 'self' google.com youtube.com https://www.google.com https://www.youtube.com; object-src 'none';`,
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/dashboard',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=180, s-maxage=300, stale-while-revalidate=600',
          },
        ],
      },
      {
        source: '/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=31536000',
          },
        ],
      },
      {
        source: '/imgs/:all*(gif|svg|jpg|jpeg|png|ico|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/favicon.(gif|svg|jpg|jpeg|png|ico|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1800, stale-while-revalidate=1800',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1800, stale-while-revalidate=1800',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
