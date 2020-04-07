import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useLastUpdate } from '../utils/fetcher';
import Spacer from './Spacer';

const useStyles = makeStyles({
    link: {
        fontWeight: "bold",
        color: "#6C63FF",
        textDecoration: "none",
        // marginLeft: 4
    },
    source: {
        color: "#666B73",
        fontSize: 12
    }
})
const LastUpdate = () => {
    const classes = useStyles();
    const lastUpdate = useLastUpdate();
    const getCleanDate = (date) => {
        return date ?lastUpdate.toDateString().split(' ').slice(1).join(' ') : "Loading..."
    }
    return (
        <Spacer variant="verticalTop">
            <Typography component="p" className={classes.source}>
                Update terakhir : <span className={classes.date}>{getCleanDate(lastUpdate)}</span>.
                <br/>
                <a className={classes.link} href="https://github.com/mathdroid/indonesia-covid-19-api/" target="_blank">Sumber Data</a>
            </Typography>
        </Spacer>
    );
};

export default LastUpdate;