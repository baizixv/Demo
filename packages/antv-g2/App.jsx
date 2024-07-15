import { Bar } from '@ant-design/plots'
import React from 'react'
import { orderList } from './datas/orders'

const value = []

const data = [
  {
    labelName: '推广总数',
    value: 110,
  },
  {
    labelName: '有效总数',
    value: 220,
  },
  {
    labelName: '跟进总数',
    value: 330,
  },
  {
    labelName: '异常总数',
    value: 440,
  },
]

const DemoBar = () => {
  const config = {
    data,
    xField: 'labelName',
    yField: 'value',
    paddingRight: 80,
    style: {
      maxWidth: 25,
    },
    markBackground: {
      label: {
        text: ({ originData }) => {
          return `${(originData.value / 1000) * 100}% | ${originData.value}`
        },
        position: 'right',
        dx: 80,
        style: {
          fill: '#aaa',
          fillOpacity: 1,
          fontSize: 14,
        },
      },
      style: {
        fill: '#eee',
      },
    },
    scale: {
      y: {
        domain: [0, 1000],
      },
    },
    axis: {
      x: {
        tick: false,
        title: false,
      },
      y: {
        grid: false,
        tick: false,
        label: false,
        title: false,
      },
    },
    interaction: {
      elementHighlightByColor: false,
    },
  }
  return <Bar {...config} />
}

export default DemoBar
