import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Box } from "@material-ui/core";
import Head from 'next/head'

import SummaryStats from "../components/SummaryStats";
import StatsCharts from "../components/StatsCharts";
import PercentageStats from "../components/PercentageStats";
import ProvinceStats from "../components/ProvinceStats";
import Spacer from "../components/Spacer";
import { Base } from "../components/Base";
import LastUpdate from "../components/LastUpdate";


const useStyles = makeStyles({
    container: {
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
    },
    doctorIcon: {
        width: "50%"
    },
    
});

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Base>
            <Head>
            <title>Crona Project | razrinn</title>

            </Head>
            <Container maxWidth="sm" className={classes.container}>
                <Spacer variant="vertical">
                    <Typography component="h1" variant="h3" align="center">
                        Crona Project
                    </Typography>
                    <Typography component="p" variant="subtitle1" align="center">
                        Informasi Terbaru Perkembangan Kasus Corona di Indonesia
                    </Typography>
                </Spacer>
                <Box display="flex" justifyContent="center" my={2}>
                    <img className={classes.doctorIcon} src="/assets/doctor.svg" alt=""/>
                </Box>
                <LastUpdate />
                <Spacer variant="vertical">
                    <SummaryStats />
                </Spacer>
                <Spacer variant="vertical">
                    <PercentageStats />
                </Spacer>
                <Spacer variant="vertical"> 
                    <ProvinceStats />
                </Spacer>
                <Spacer variant="vertical">
                    <StatsCharts />
                </Spacer>
            </Container>
        </Base>
    );
};

export default IndexPage;
