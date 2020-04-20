import React from "react";
import PropTypes from "prop-types";
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    AreaSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Paper, Card } from "@material-ui/core";
const GraphChart = (props) => {
    const {data, valueField, argumentField} = props;    
    return (
        <Card>
            <Chart data={data}>
                <ArgumentAxis showLabels={true} />
                <ValueAxis />
                <AreaSeries color="#6C63FF" valueField={valueField} argumentField={argumentField} />
            </Chart>
        </Card>
    );
};

GraphChart.propTypes = {
    data: PropTypes.array,
    valueField: PropTypes.string,
    argumentField: PropTypes.string
};

export default GraphChart;
