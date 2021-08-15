const px2rem = require('postcss-px2rem');

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins:[
                    px2rem({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    devServer: {
        overlay: {
          warnings: false, //不显示警告
          errors: false	//不显示错误
        }
      },
    lintOnSave:false //关闭eslint检查
}