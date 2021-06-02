import moment from "moment";

export const spreadTriggersToDay = (pairs=[]) => {
    let data = new Array(24).fill(0).map((_,index)=>({hour: index, value: 0}))
    pairs.forEach(({time, value})=>{
        const hour = getHour(time)
        data[hour] = {...data[hour], value: data[hour].value+value}
    })
    return data
}

export const getTotalPshicks = (pairs, unit='day') => {
    const todayWakeUps = pairs.filter(({time})=>{
        return moment(time).isSame(moment(), unit)
    })
    return todayWakeUps.reduce((total, {value})=>total+value,0)
}

const getHour = (timestamp) => {
    return +moment(timestamp).format('H')
}
