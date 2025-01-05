// 生成随机验证码
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
function paginateArray(array, pageNumber, pageSize) {
    // 计算起始索引
    const startIndex = (pageNumber - 1) * pageSize;
    // 计算结束索引
    const endIndex = startIndex + pageSize;
    // 使用slice方法获取当前页的数据
    return array.slice(startIndex, endIndex);
}

module.exports = {
    generateOTP, paginateArray
}