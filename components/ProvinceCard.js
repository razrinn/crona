import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        borderLeft: "5px solid #6C63FF"
    },
    bold: {
        fontWeight: "bold"
    },
    card: {
    },
    death: {
        color: "#6C63FF"
    },
    healthyText: {
        color: "#329932"   
    }
  });
const ProvinceCard = props => {
    const classes = useStyles();
    const { important, stat} = props;
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component="p" className={classes.bold}  >
                    {stat.provinsi}
                </Typography>
                <Typography component="p" variant="subtitle2">
                    Positif: {stat.kasusPosi}
                </Typography>
                <Typography className={classes.healthyText} component="p" variant="subtitle2">
                    Sembuh: {stat.kasusSemb}
                </Typography>
                <Typography className={classes.death} component="p" variant="subtitle2">
                    Meninggal: {stat.kasusMeni}
                </Typography>
            </CardContent>
        </Card>
    );
};

ProvinceCard.propTypes = {
    important: PropTypes.bool
};

export default ProvinceCard;