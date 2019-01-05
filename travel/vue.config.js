module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'styles': 'assets/styles',
            }
        }
    },
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/welooky/'
        : '/',
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api/': '/mock/', // rewrite path
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
};
