const { paginateArray } = require('../common/util')

var list = [
    {
        title: '番茄培根意面',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0306.JPG',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '坚果布丁',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0307.JPG',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '牛肉炒饭',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0387.JPG',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '蓝莓布丁',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0457.JPG',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '巧克力蛋糕',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0468.JPG',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '韭菜炒肉',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20240630_131042.jpg',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '东坡肉',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241216_125010.jpg',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '纸杯蛋糕',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241223_150925.jpg',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '宫保鸡丁',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241230_182547.jpg',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '韭菜花肉',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/韭菜花肉.jpg',
        time: '2024年11月10日',
        type: 'food'
    },
    {
        title: '六神合辑',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/DJI_0544.JPG',
        time: '2024年11月10日',
        type: 'art'
    },
    {
        title: '芙宁娜',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Image_505709880458248.jpg',
        time: '2024年11月10日',
        type: 'art'
    },
    {
        title: '原神合辑',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20240925_232618_edit_356987531126256.jpg',
        time: '2024年11月10日',
        type: 'art'
    },
    {
        title: '雷电将军',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215546_edit_514321137701727.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '枫原万叶',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215714.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '宵宫',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215734.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '魈',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215754.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '钟离',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215818.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '胡桃',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_215906.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '克洛琳德',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_220008.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '芙宁娜',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241104_220037.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: 'Q版雷电将军',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241202_182800.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: 'Q版纳西妲',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241209_152402.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: 'Q版钟离',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241219_230022.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: 'Q版温迪',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241226_222154.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: 'Q版玛薇卡',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/IMG_20241231_215725.jpg',
        time: '2025年1月5日',
        type: 'art'
    },
    {
        title: '培根金针菇&玉米排骨汤',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Videoframe_20241104_213118_com.huawei.himovie.local.jpg',
        time: '2025年1月5日',
        type: 'food'
    },
    {
        title: '彩椒牛肉&酸汤肥牛',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Videoframe_20241108_081927_com.huawei.himovie.local.jpg',
        time: '2025年1月5日',
        type: 'food'
    },
    {
        title: '土豆咖喱鸡&青瓜虾仁',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Videoframe_20241108_081954_com.huawei.himovie.local.jpg',
        time: '2025年1月5日',
        type: 'food'
    },
    {
        title: '番茄牛肉&苦瓜炒蛋',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Videoframe_20241108_082030_com.huawei.himovie.local.jpg',
        time: '2025年1月5日',
        type: 'food'
    },
    {
        title: '炒饭',
        src: 'https://hksofy-hzcsfn-4000.app.cloudstudio.work/Videoframe_20241108_082053_com.huawei.himovie.local.jpg',
        time: '2025年1月5日',
        type: 'food'
    },

]
function Blog({ router, db, url }) {
    router.get("/selectAllPic", function (req, res) {
        // db.select_all_pic().then(val => {
        //     res.send(JSON.stringify({
        //         code: 200,
        //         message: val
        //     }))
        // })
        res.send(JSON.stringify({
            code: 200,
            message: list
        }))
    })
    router.get("/selectPic", function (req, res) {
        let obj = url.parse(req.url, true).query
        res.send(JSON.stringify({
            code: 200,
            message: list.filter(item => item.type == obj.type)
        }))
    })
    router.get("/selectPagePic", function (req, res) {
        let obj = url.parse(req.url, true).query
        res.send(JSON.stringify({
            code: 200,
            message: paginateArray(list, obj.current, obj.size),
            total: list.length
        }))
    })
}

module.exports = {
    Blog
}