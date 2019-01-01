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
        : '/'
};
