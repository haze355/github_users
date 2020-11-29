// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts,  Maps, World, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "maps/world", // The map type
   
    width: '100%',
    height: '500',
    dataFormat: 'json',
    dataSource: {
      
      chart: {
        caption: "User Location",
        theme: "fusion",
        formatNumberScale: 0,
        numberSuffix: "M"
      },
      colorrange: {
        color: [{
          minvalue: 0,
          maxvalue: 100,
          code: "#D0DFA3",
         displayValue:"< 100M"
        }, {
         minvalue:100,
         maxvalue:500,
         code:"#B0BF92",
         displayValue:"100-500M"
        }, {
         minvalue:500,
         maxvalue:1000,
         code:"#91AF64",
         displayValue:"500M-1B"
        }, {
         minvalue:1000,
         maxvalue:5000,
         code:"#A9FF8D",
         displayValue:"> 1B"
        }]
      },

      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
