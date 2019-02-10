module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.readhub.cn/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}