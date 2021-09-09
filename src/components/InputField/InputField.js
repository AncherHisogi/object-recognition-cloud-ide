import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UrlInput from "../UlrInput/UlrInput";
import Picture from "../Picture/Picture.js";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 50,
    zIndex: 1,
    position: "relative",
    top: -250
  },
  grid: {
    direction: "row",
    justifyContent: "center",
    alignItems: "flexstart"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function InputField({
  onInputChange,
  onButtonSubmit,
  getList,
  imageUrl
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.grid} item xs={12} sm={12}>
          <Paper className={classes.paper}>
            {" "}
            <UrlInput
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />{" "}
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <Picture imageUrl={imageUrl} />{" "}
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={6}>
          <List className={classes.list}>
            {getList.map((load) => (
              <Paper className={classes.paper}>
                {" "}
                <ListItem button>
                  {" "}
                  <ListItemText
                    key={load.id}
                    primary={load.name}
                    // secondary={
                    //   // "Confidence " + (load.value * 100).toFixed(2) + "%"
                    // }
                  />{" "}
                </ListItem>{" "}
              </Paper>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

//getList.map((id, value) =>  <ListItem button> <ListItemText primary={id} /> </ListItem>)

// getList.map((id, value) => {return <ListItem button> <ListItemText primary={id} /> </ListItem>})
