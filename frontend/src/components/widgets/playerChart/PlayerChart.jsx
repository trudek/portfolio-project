import { SPlayerChart } from './PlayerChart.styled';

import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';
import { useContext } from 'react';
import { ThemeContext } from './../../../App';

const PlayerChart = () => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  const series = [
    {
      name: t('dashboard_chartPrice'),
      data: [
        [1655683200000, 1719667],
        [1655686800000, 1716000],
        [1655690400000, 1716250],
        [1655694000000, 1695000],
        [1655697600000, 1665000],
        [1655701200000, 1647500],
        [1655704800000, 1625333],
        [1655708400000, 1663750],
        [1655712000000, 1681333],
        [1655715600000, 1691333],
        [1655719200000, 1704667],
        [1655722800000, 1698000],
        [1655726400000, 1699750],
        [1655730000000, 1681000],
        [1655733600000, 1683667],
        [1655737200000, 1665000],
        [1655740800000, 1668000],
        [1655744400000, 1667000],
        [1655748000000, 1663500],
        [1655751600000, 1665000],
        [1655755200000, 1683333],
        [1655758800000, 1690000],
        [1655762400000, 1695000],
        [1655766000000, 1682000],
        [1655769600000, 1693000],
        [1655773200000, 1685000],
        [1655780400000, 1694667],
        [1655784000000, 1690000],
        [1655787600000, 1623500],
        [1655791200000, 1523333],
        [1655794800000, 1559250],
        [1655798400000, 1610000],
        [1655802000000, 1641667],
        [1655805600000, 1619667],
        [1655809200000, 1676000],
        [1655812800000, 1623333],
        [1655816400000, 1626667],
        [1655820000000, 1670000],
        [1655823600000, 1635333],
        [1655827200000, 1607000],
        [1655830800000, 1641500],
        [1655834400000, 1665500],
        [1655838000000, 1657500],
        [1655841600000, 1645500],
        [1655845200000, 1626667],
        [1655848800000, 1674500],
        [1655852400000, 1689000],
        [1655856000000, 1681333],
        [1655859600000, 1648750],
        [1655863200000, 1630000],
        [1655866800000, 1634000],
        [1655870400000, 1655000],
        [1655874000000, 1685667],
        [1655877600000, 1684000],
        [1655881200000, 1672667],
        [1655884800000, 1676333],
        [1655888400000, 1669500],
        [1655892000000, 1669000],
        [1655895600000, 1694500],
      ],
    },
  ];

  const options = {
    chart: {
      background: 'undefined',
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: true,
          reset: true,
          customIcons: [],
        },
      },
    },
    theme: {
      mode: `${theme}`,
      palette: 'palette1',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    stroke: {
      curve: 'straight',
    },
    xaxis: {
      type: 'datetime',
      // labels: {
      //   format: 'dd MMM yyyy HH:ss',
      // },
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM yyyy',
          day: 'dd MMM yyyy',
          hour: 'dd MMM HH:mm',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          });
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  };

  return (
    <SPlayerChart>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={380}
      />
    </SPlayerChart>
  );
};
export default PlayerChart;
