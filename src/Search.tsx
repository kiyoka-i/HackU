import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    searchBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    searchIcon:{
        fontSize: "30px",
    }
  })
);

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <SearchIcon className={classes.searchIcon}/>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="ユーザー名" variant="outlined" />
      </form>
    </div>
  );
};

export default Search;