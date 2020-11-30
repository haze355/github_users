// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

import Maps from 'fusioncharts/fusioncharts.maps';
import USA from 'fusioncharts/maps/fusioncharts.usa';


// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts,  Maps, USA, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "maps/usa", // The map type
   
    width: '100%',
    height: '500',
    dataFormat: 'json',
    dataSource: {
      
      chart: {
        caption: " Gitbub Users Geographic Distribution ",
        theme: "fusion",
        tooltipbgcolor: "#FFFFFF",
        tooltipbordercolor: "#CCCCCC",
        showentitytooltip: "0",
        showentityhovereffect: "0",
        showlabels: "0",
        entitytooltext:
          "<div style='font-size:14px; text-align:center; padding: auto; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Count: <b>$value</b></div>",
        entityfillhovercolor: "#FFF9C4",
        nullentitycolor: "#ECE9D3"
      },
      colorrange: {
        minvalue: "200000",
        code: "#EAD95F",
        gradient: "1",
        color: [
          {
            maxvalue: "20000000",
            code: "#EE8D50"
          },
          {
            maxvalue: "224156000",
            code: "#F24141"
          }
        ]
      },
      
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;