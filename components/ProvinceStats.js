import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import ProvinceCard from "./ProvinceCard";
import Spacer from "../components/Spacer";
import { useProvinceStats } from "../utils/fetcher";

const ProvinceStats = () => {
    const stats = useProvinceStats();
    const [limit, setLimit] = useState(8);
    const handleChangeLimit = () => {
        setLimit(limit + 8);
    };
    if (!stats) return "Fetching data please wait ...";
    return (
        <div>
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
            {limit < stats.data.length ? (
                <Spacer variant="verticalTop">
                    <Typography
                        component="p"
                        align="center"
                        onClick={handleChangeLimit}
                        style={{cursor: "pointer"}}
                    >
                        Tampilkan lebih banyak
                    </Typography>
                </Spacer>
            ) : null}
        </div>
    );
};

export default ProvinceStats;
