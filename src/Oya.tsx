import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Test from "./Test";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  divider: {
    marginTop: "20px",
    marginBottom: "20px"
  },
    h2: {
      textAlign: "left",
      marginLeft: "20px"
    }
  
});

const Oya: React.FC = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [tag1, setTag1] = useState<string>("");
  const [tag2, setTag2] = useState<string>("");
  useEffect(() => {
    setName("Ikeda");
    setIcon("ic");
    setTag1("Art");
    setTag2("Cook");
  });
  return (
    <div>
    <h2 className={classes.h2}>ユーザー検索</h2>
    <Search />
    <Divider variant="middle" className={classes.divider}/>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={2}>
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
        <Test name={name} icon={icon} tag1={tag1} tag2={tag2} />
      </Grid>
    </Grid>
    </div>
  );
};

export default Oya;
