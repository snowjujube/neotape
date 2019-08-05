module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    chainWebpack: config => {
        config.module
            .rule("css")
            .use("px2rem-loader")
                .loader("px2rem-loader")
                .tap(options => {
                options = {remUnit : 75};
                return options;
            });
    },
};
