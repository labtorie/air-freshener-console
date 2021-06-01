import React from 'react'
import styles from './styles.module.css'
import ApexChart from 'react-apexcharts'

const TriggerGraph = ({data = []}) => {

    const series = [{data: data.map(({value}) => value), name: 'Usage'}]

    const options = {
        chart: {
            width: 380,
            type: 'radar',

        },
        title: {
            text: 'Daily usage',
            align: 'left'
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: 'transparent',
                    fill: {colors: ['#fff']}
                },

            }
        },
        labels: data.map(({hour}) => hour),
        fill: {
            opacity: .4
        },
        stroke: {
            show: false,
            width: 2,
            colors: [],
            dashArray: 0
        },
        markers: {
            size: 0
        },
        yaxis: {
            show: false
        },
        xaxis: {
            show: true,
            categories: data.map(({hour}) => hour+':00'),
            labels: {
                show: true,
                style: {
                    colors: ["#161616"],
                    fontSize: "11px",
                    fontFamily: 'Arial',
                }
            }
        },
        legend: {
            show: false
        },

    }

    return <div className={styles.graphContainer}>
        <ApexChart type={'radar'} options={options} series={series} height={350} style={{width: '100%'}}/>
    </div>
}

export default TriggerGraph
