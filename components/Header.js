import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Spacer from "./Spacer";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({

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

const Header = () => {
    const classes = useStyles();
    return (
        <Spacer variant="verticalTop">
            <Typography component="p" className={classes.navLink}>
                <KeyboardBackspaceIcon />
                <a className={classes.link} href="https://razrinn.com">
                    Kembali ke razrinn.com
                </a>
            </Typography>
        </Spacer>
    );
};

export default Header;
