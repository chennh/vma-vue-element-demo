vmaAssist 自动注册以下功能
  一、filters
    1、日期格式化
      date(format = 'yyyy-Mm-dd hh:mm:ss')
    2、货币格式化
      currency({
                places: 2,        // 保留小数位置
                symbol: '￥',      // 货币标识符
                thousand: ', ',   // 千位分隔符
                decimal: '.'      // 小数点
              })
    3、对象/数组取值
      value(property, arrOrObj)
    4、URL补全
      url
      必须配置options.utils.fmt.imgDomain
  
  二、plugins
    1、axios
      1.1、applicationForm
        指定数据提交方式为 'Content-Type': 'application/x-www-form-urlencoded;chartset=UTF-8'
        config.contentType = form
      1.2、authorization
        接口鉴权
        config.mac = false 则单次跳过该拦截器
      1.3、dataToUnderline
        请求数据转下划线
        config.dataToUnderline = false 则单次跳过该拦截器

        dataToHump
        接口返回数据转驼峰
      1.4、disableCache
        get请求禁用缓存
        config.cache = true 则单次跳过该拦截器
      1.5、errorHandle
        全局错误处理，需在配置中提供
      1.6、loading
        加载中效果，需在配置中提供
      1.7、removeEmpty
        移除数据中的空字符串，包括params/data/url
        config.removeEmpty = true 启用
      1.8、returnResponseData，默认不启用该拦截器，需配置为true才开启
        只返回response.data
        config.dataOnly = true 则单次跳过该拦截器

    