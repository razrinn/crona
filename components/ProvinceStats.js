import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import ProvinceCard from "./ProvinceCard";
import Spacer from "../components/Spacer";
import { useProvinceStats } from "../utils/fetcher";

const ProvinceStats = () => {
    const stats = useProvinceStats();
    const [limit, setLimit] = useState(8);
    const handleShowMore = () => {
        setLimit(limit + 8);
    };
    const handleShowLess = () => {
        setLimit(8);
    }
    if (!stats) return "Fetching data please wait ...";
    const showMore = {
        cursor: "pointer",
        fontWeight: "bold",
        color: "#6C63FF"
    }
    return (
        <Spacer variant="vertical">
            <Spacer variant="verticalBottom">
                <Typography component="h2" variant="h5" style={{fontWeight: "bold"}}>
                    Kasus Berdasarkan Provinsi
                </Typography>
            </Spacer>
            <Grid container spacing={2}>
                {stats.data.filter(data=> (data.kodeProvi !== 0)).slice(0, limit).map((stat, index) => (
                    <Grid item xs={6} key={index}>
                        <ProvinceCard important={index < 5} stat={stat} />
                    </Grid>
                ))}
            </Grid>
            <Spacer variant="verticalTop">
                {limit < stats.data.length ? (
                        <Typography
                            component="p"
                            align="center"
                            onClick={handleShowMore}
                            style={showMore}
                        >
                            Tampilkan lebih banyak
                        </Typography>
                ) : (
                    <Typography
                            component="p"
                            align="center"
                            onClick={handleShowLess}
                            style={showMore}
                        >
                            Tampilkan lebih sedikit
                        </Typography>
                )}
            </Spacer>
        </Spacer>
    );
};

export default ProvinceStats;
