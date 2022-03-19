import { makeStyles} from "@material-ui/core";
import {alpha} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) =>({
    main_home:{
        width: "100%",
        height: "20rem",
        paddingTop: "150px",
        display: "flex",
        justifyContent: "center",
    },
    text_main:{
        display: "flex",
        width: "87%",
        height: "4.5rem",
        [theme.breakpoints.down("sm")]:{
          display: "flex",
          flexDirection: "column",
        },
        "& h1":{
fontWeight: "bold",
fontSize: "3rem",
        },
    },
    DropDown:{
      "& .btn-light.dropdown-toggle:focus":{
        boxShadow: "none",
      },
    },
    search: {
        position: 'relative',
        border: "3px solid gray",
        display: "flex",
        justifyContent: "center",
        borderRadius: "20px",
        alignItems: "center",
        // borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: "400px",
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        // width: '100%',
        // width: "300px",

    
      },

}))

export default useStyle;