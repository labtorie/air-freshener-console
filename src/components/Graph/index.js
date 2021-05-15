import React from "react";
import {Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts'

const Graph = ({data}) => {
    return <ResponsiveContainer width={'100%'} height={500}><LineChart
        data={data}
        width={500}
        height={500}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >
        <XAxis dataKey={'time'}/>
        <YAxis dataKey={'value'}/>
        <Legend/>
        <Line dataKey={'value'} type={'monotone'} stroke={"#8884d8"}/>
    </LineChart>
    </ResponsiveContainer>
}

export default Graph
