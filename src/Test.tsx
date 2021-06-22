import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  avatar: {
    margin: "0 auto",
  },
  typography: {
    margin: "0 auto",
    width: "fit-content",
  },
  tags: {
    margin: "0 auto",
  },
  tag: {
    marginLeft: "10px",
  },
  waku: {
    border: "solid 3px #000000",
    width: "fit-content",
    margin: "1em",
  },
});

type Props ={
  name: string;
  icon: string;
  tag1: string; 
  tag2: string;
};

const Test: React.FC<Props> = ({ name, icon, tag1, tag2 }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.waku}>
        <IconButton aria-label="delete" className={classes.avatar}>
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          />
        </IconButton>
        <Typography variant="h5" gutterBottom className={classes.typography}>
          {name}
        </Typography>

        <div className={classes.tags}>
          <Chip
            variant="outlined"
            size="small"
            label= "Basic"
            className={classes.tag}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Basic"
            className={classes.tag}
          />
        </div>
      </div>
    </>
  );
};

export default Test;
