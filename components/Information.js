import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import Spacer from "./Spacer";

const useStyles = makeStyles({
    cronaIcon: {
        width: "60%",
    },
    title: {
        fontWeight: "bold",
        color: "#6C63FF"
    },
    source: {
        color: "#666B73",
        fontSize: 12
    }
});
const Information = () => {
    const classes = useStyles();
    return (
        <Spacer variant="vertical">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h3">
                        Crona
                    </Typography>
                    <Typography component="p" variant="subtitle1">
                        Aplikasi <b>(Unofficial)</b> Informasi Terbaru Perkembangan Kasus Corona di Indonesia
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" my={2}>
                        <img
                            className={classes.cronaIcon}
                            src="/assets/crona.png"
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Spacer variant="vertical">
                        <Typography component="h2" variant="h5" className={classes.title}>
                            Apa itu COVID-19?
                        </Typography>
                        <Spacer variant="vertical">
                            <Typography component="p">
                                COVID-19 adalah penyakit peradangan paru yang disebabkan
                                oleh Severe Acute Respiratory Syndrome Coronavirus 2
                                (SARS-CoV-2). Gejala klinis yang muncul beragam, mulai
                                dari seperti gejala flu biasa (batuk, pilek, nyeri
                                tenggorok, nyeri otot, nyeri kepala) sampai yang
                                berkomplikasi berat (pneumonia atau sepsis).
                            </Typography>
                        </Spacer>
                        <Spacer variant="verticalTop">
                            <Typography component="p" className={classes.source}>
                                Sumber : corona.jogjaprov.go.id
                            </Typography>
                        </Spacer>
                    </Spacer>
                </Grid>
            </Grid>
        </Spacer>
    );
};

export default Information;
