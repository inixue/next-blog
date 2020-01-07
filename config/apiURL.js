let ipURL = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList: ipURL+'getArticleList',         // 首页接口
    getArticleById: ipURL+'getArticleById/',        // 详细页接口
    getTypeInfo: ipURL+'getTypeInfo',               // 文章分类类别接口
    getListById: ipURL+'getListById/',              // 类别ID查询列表
}

export default servicePath;