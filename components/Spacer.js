import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    vertical: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    verticalBottom: {
        paddingBottom: 16,
    },
    verticalTop:{
        paddingTop: 16,
    },
    horizontal: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    both: {
        padding: 16
    }
});
const Spacer = (props) => {
    const { variant } = props;
    const classes = useStyles();
    return <div className={classes[variant]}>{props.children}</div>;
};

Spacer.propTypes = {
    variant: PropTypes.string.isRequired,
};

export default Spacer;
