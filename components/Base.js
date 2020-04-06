import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    base: {
        backgroundColor: "#35393C",
    },
});
export const Base = (props) => {
    const classes = useStyles();
    return <div className={classes.base}>{props.children}</div>;
};
