import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";

import SummaryStats from "../components/SummaryStats";
import StatsCharts from "../components/StatsCharts";
import PercentageStats from "../components/PercentageStats";
import ProvinceStats from "../components/ProvinceStats";
import { Base } from "../components/Base";
import LastUpdate from "../components/LastUpdate";
import Information from "../components/Information";
import Header from "../components/Header";

const useStyles = makeStyles({
    container: {
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
    },
    navLink: {
        fontWeight: "bold",
        color: "#6C63FF",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    link: {
        color: "#6C63FF",
        textDecoration: "none",
    },
});

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Base>
            <Head>
                <title>Crona | razrinn</title>
            </Head>
            <Container maxWidth="md" className={classes.container}>
                <Header />
                <Information />
                <LastUpdate />
                <SummaryStats />
                <PercentageStats />
                <StatsCharts />
                <ProvinceStats />
            </Container>
        </Base>
    );
};

export default IndexPage;
