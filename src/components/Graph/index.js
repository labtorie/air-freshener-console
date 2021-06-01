import React from 'react'
import ReactApexChart from 'react-apexcharts'
import moment from "moment";
import styles from './styles.module.css'

const BatteryGraph = ({data=[]}) => {

    const options = {
            colors: ['#00ff00'],
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom',
                    tools: {
                        download: false,
                        selection: true,
                        zoom: true,
                        zoomin: false,
                        zoomout: false,
                        pan: true,
                        reset: true | '<img src="/static/icons/reset.png" width="20">',
                        customIcons: []
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Battery Percentage',
                align: 'left'
            },
            fill: {
                colors: ['#00ff00'],
            },
            yaxis: {
                max: 100,
                type: 'numeric',
                min: 0,
                title: {
                    text: 'Battery'
                },
                labels: {
                    formatter: (val) => val+'%'
                }
            },
            xaxis: {
                type: 'numeric',
                categories: data.map(({time})=>time),
                labels: {
                    formatter: function (val) {
                        return moment(val).format('DD/MM HH:mm');
                    },
                },
            },
            tooltip: {
                shared: false,
            }
        }

    const series = [{
        name: 'Battery',
        data: data.map(({value, time}, index)=>value)
    }]

    return <div className={styles.graphContainer}>
        <ReactApexChart options={options} series={series} type="area" height={350} style={{width: '100%'}}/>
    </div>
}


export default BatteryGraph
