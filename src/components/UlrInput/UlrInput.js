import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  textSearch: {
    color: "#148bff",
    textDecoration: "none"
  }
}));

export default function UrlInput({
  onInputChange,
  getList,
  onButtonSubmit,
  imageUrl
}) {
  const classes = useStyles();

  return (
    <div>
      <Box color="text.primary" clone>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            InputProps={{
              className: classes.textSearch
            }}
            id="outlined-basic"
            label="Input URL"
            variant="outlined"
            style={{ minWidth: "200px" }}
            onInput={onInputChange}
            spellCheck="false"
          />

          <Button
            variant="contained"
            color="primary"
            style={{ height: "7ch" }}
            onClick={onButtonSubmit}
          >
            Search
          </Button>
        </form>
      </Box>
    </div>
  );
}
