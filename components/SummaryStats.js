import StatsCard from "./StatsCard";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { useSummaryStats, useLastUpdate } from "../utils/fetcher";
import Spacer from "./Spacer";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold"
    },   
})

const SummaryStats = () => {
    const classes = useStyles();
    const stats = useSummaryStats();
    const lastUpdate = useLastUpdate();
    if (!stats || !lastUpdate) return "Fetching data please wait ...";
    return (
        <Spacer variant="vertical">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5" className={classes.bold}>
                        Kasus di Seluruh Indonesia
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <StatsCard
                        number={stats.jumlahKasus}
                        information="Jumlah Kasus"
                    />
                </Grid>
                <Grid item xs={6}>
                    <StatsCard
                        number={stats.perawatan}
                        information="Kasus Positif"
                    />
                </Grid>
                <Grid item xs={6}>
                    <StatsCard number={stats.sembuh} information="Sembuh" />
                </Grid>
                <Grid item xs={6}>
                    <StatsCard number={stats.meninggal} information="Meninggal" />
                </Grid>
            </Grid>
        </Spacer>
    );
};

export default SummaryStats;
