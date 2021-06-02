import React from 'react'
import styles from './styles.module.css'
import ApexChart from 'react-apexcharts'

const TriggerGraph = ({data = []}) => {

    const series = [{data: data.map(({value}) => value), name: 'Activations'}]

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
            size: 3
        },
        yaxis: {
            show: false,
            labels: {
                formatter: val => val+' times',

            }
        },
        xaxis: {
            show: true,
            categories: data.map(({hour}) => hour+':00'),
            labels: {
                show: true,
            },
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
