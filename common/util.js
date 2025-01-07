// 生成随机验证码
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// 分页
function paginateArray(array, current, size) {
    var result = [];
    array.forEach((e, index) => {
        var page = Math.floor(index / size)//下取整
        if (!result[page]) {
            result[page] = []
        }
        result[page].push(e)
    })
    return result[current-1]
}

module.exports = {
    generateOTP, paginateArray
}