const withPWA = require('next-pwa');

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        // loader: (width, src, quality) => `/preprocessed-images/${filename}-${width}.jpg`,
        loader: 'imgix',
        path: "https://noop/",
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
    }
})
