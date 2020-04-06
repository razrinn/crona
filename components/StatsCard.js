import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
    //   minWidth: 275,
    },
    number: {
        fontWeight: "bold",
        color: "#6C63FF"
    }
  });
const StatsCard = props => {
    const classes = useStyles();
    const {number, information} = props;
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component="p" variant="h3" className={classes.number}>
                    {number}
                </Typography>
                <Typography component="p">
                    {information}
                </Typography>
            </CardContent>
        </Card>
    );
};

StatsCard.propTypes = {
    number: PropTypes.number,
    information: PropTypes.string
};

export default StatsCard;