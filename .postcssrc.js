module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // rootValue: 37.5,   // 如果将来是自己的设计图(750px)，直接写75即可！ 就可以设计图是多少px，css书写就写多少px  
            rootValue({ file }) {  // 如果是vant的就按照375 尺寸， 如果是其他的就是按照750 
                return file.indexOf('vant') !== -1 ? 37.5 : 75;   // rootValue 的值一般是 设计稿  1/10
            },
            propList: ['*'],
        },
    },
};