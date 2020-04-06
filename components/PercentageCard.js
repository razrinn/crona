import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        // borderLeft: "5px solid #6C63FF",
    },
    number: {
        fontWeight: "bold",
        color: "#6C63FF"
    },
    small: {
        fontSize: 12
    }
});
const PercentageCard = (props) => {
    const { percentage, information } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    component="p"
                    variant="h6"
                    className={classes.number}
                >
                    {percentage} <small>%</small>
                </Typography>
                <Typography component="p">{information}</Typography>
            </CardContent>
        </Card>
    );
};
PercentageCard.propTypes = {
    percentage: PropTypes.string,
    information: PropTypes.string,
};

export default PercentageCard;
