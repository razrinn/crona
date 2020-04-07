import React from "react";
import Spacer from "./Spacer";

import { Typography, makeStyles, Grid } from "@material-ui/core";
import GraphChart from "./GraphChart";
import { useDailyStats } from "../utils/fetcher";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold",
    },
});
const StatsCharts = () => {
    const classes = useStyles();
    const stats = useDailyStats();
    if (!stats) return "Fetching data please wait...";
    return (
        <Spacer variant="vertical">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography
                        component="h2"
                        variant="h5"
                        className={classes.bold}
                    >
                        Grafik Kumulatif Positif COVID-19
                    </Typography>
                    <Spacer variant="vertical">
                        <GraphChart
                            data={stats.data}
                            valueField="jumlahKasusKumulatif"
                            argumentField="harike"
                        />
                    </Spacer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        component="h2"
                        variant="h5"
                        className={classes.bold}
                    >
                        Grafik Kasus Baru COVID-19
                    </Typography>
                    <Spacer variant="vertical">
                        <GraphChart
                            data={stats.data}
                            valueField="jumlahKasusBaruperHari"
                            argumentField="harike"
                        />
                    </Spacer>
                </Grid>
            </Grid>
        </Spacer>
    );
};

export default StatsCharts;
