import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useLastUpdate } from '../utils/fetcher';

const useStyles = makeStyles({
    link: {
        fontWeight: "bold",
        color: "#6C63FF",
        textDecoration: "none",
        marginLeft: 4
    }
})
const LastUpdate = () => {
    const classes = useStyles();
    const lastUpdate = useLastUpdate();
    const getCleanDate = (date) => {
        return date ?lastUpdate.toDateString().split(' ').slice(1).join(' ') : "Loading..."
    }
    return (
        <Typography component="p" className={classes.noMargin}>
            Update terakhir : <span className={classes.date}>{getCleanDate(lastUpdate)}</span>.
            <a className={classes.link} href="https://github.com/mathdroid/indonesia-covid-19-api/" target="_blank">Sumber Data</a>
        </Typography>
    );
};

export default LastUpdate;