module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'styles': 'assets/styles',
            },
        },
        devtool: 'source-map',

    },
};
