import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import PercentageCard from "./PercentageCard";
import { usePercentageStats } from "../utils/fetcher";
import Spacer from "./Spacer";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold",
    },
});
const PercentageStats = () => {
    const classes = useStyles();
    const stats = usePercentageStats();
    if (!stats) return "Fetching data please wait ...";
    return (
        <Spacer variant="vertical">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        component="h2"
                        variant="h5"
                        className={classes.bold}
                    >
                        Persentase Kasus
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <PercentageCard
                        percentage={stats.perawatan}
                        information="Dalam Perawatan"
                    />
                </Grid>
                <Grid item xs={4}>
                    <PercentageCard
                        percentage={stats.sembuh}
                        information="Pasien Sembuh"
                    />
                </Grid>
                <Grid item xs={4}>
                    <PercentageCard
                        percentage={stats.meninggal}
                        information="Pasien Meninggal"
                    />
                </Grid>
            </Grid>
        </Spacer>
    );
};

export default PercentageStats;
