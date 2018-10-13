function getRandom(Min = 0, Max = 150) {
    var Range = Max - Min
    var Rand = Math.random()
    return Min + Math.round(Rand * Range)
}

function shuffle(arr) {
    for (
        var j, x, i = arr.length;
        i;
        j = parseInt(Math.random() * i),
        x = arr[--i],
        arr[i] = arr[j],
        arr[j] = x
    );
    return arr
}

function getTime(type) {
    const date = new Date()
    //如果不是求当前时间，则随机往前推 2 - 300 分钟 （一分钟60000毫秒）
    const d =
        type === 'now'
            ? date
            : new Date(date.getTime() - 60000 * getRandom(2, 300))
    let hour = d.getHours()
    let m = d.getMinutes()

    let s = ''

    if (hour < 6) {
        s = '凌晨'
    } else if (hour < 12) {
        s = '早上'
    } else if (hour < 13) {
        s = '中午'
    } else if (hour < 17) {
        s = '下午'
    } else {
        s = '晚上'
    }
    hour = hour === 0 ? 12 : hour
    const h = hour > 12 ? hour - 12 : hour
    m = m < 10 ? `0${m}` : m
    return {
        str: `${s} ${h}:${m}`,
        tamp: d.getTime(),
        hhmm: `${h}:${m}`
    }
}

export { getRandom, shuffle, getTime }