import React from 'react'
import ReactApexChart from 'react-apexcharts'
import moment from "moment";
import styles from './styles.module.css'
import {voltage} from "../../config/battery";

const BatteryGraph = ({data=[]}) => {

    const options = {
            colors: ['#5fd393'],
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
                text: 'Battery Voltage',
                align: 'left',
                style: {
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                }
            },
            fill: {
                colors: ['#5fd393'],
            },
            yaxis: {
                max: voltage.max,
                min: voltage.min,
                type: 'numeric',
                title: {
                    text: 'Volts',
                    style: {
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                    }
                },
                labels: {
                    formatter: (val) => val.toFixed(1),
                    style: {
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                    }
                },

            },
            xaxis: {
                type: 'numeric',
                categories: data.map(({time})=>time),
                labels: {
                    formatter: function (val) {
                        return moment(val).format('DD.MM HH:mm');
                    },
                    style: {
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                    }
                },
            },
            tooltip: {
                shared: false,
                style: {
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                }
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
