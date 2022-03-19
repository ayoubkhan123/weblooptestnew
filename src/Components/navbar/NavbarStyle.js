import { makeStyles } from "@material-ui/core";

const useStyle =makeStyles((theme) =>({
    main_nav:{
        background: "#192c30",
        padding: "20px 0px",
        "& .navbar-toggler":{
        background: "white",
        },
    },
    navbar:{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
    },
    head_logo:{
        color: "white",
        width: "50px",
        display: "flex",
        placeItems: "center",
        justifyContent: "center",
        height: "3rem",
        border: "4px solid white",
        borderRadius: "10px",
        marginLeft: "60px",
    },
    buttons:{
        display: "flex",
        justifyContent: "center",
        gap: "0px 10px",
        alignItems: "center",
        [theme.breakpoints.down("sm")]:{
                marginTop: "20px",
        },
    },
    DropDown:{
        color: "gray",
        fontWeight: "bold",
        borderRadius: "40px",
        "& button":{
            fontWeight: "bold",
            fontSize: "17px",
            background: "none !important",
            border: "none",

        },
        "& .btn-dark.dropdown-toggle:focus":{
            boxShadow: "none",
            backgroundColor: "none",
            border: "none",

        },
        "& .btn-dark:hover":{
            boxShadow: "none",
            background: "none",
            border: "none",
            borderRadius: "40px",


        },
    },
    btn1:{
        "& button:focus":{
                outline: "none",
                boxShadow: "none",
        },
    },
    btn2:{
            background: "192c30 !important",
            color: "white",
            border: "2px solid white",
            borderRadius: "20px",
            "& :hover":{
                // background: "red !important",
                // border: "2px solid red",


            },
            // [theme.breakpoints.down("sm")]:{
            //     marginBottom: "10px",
            // },
    },
    btn3:{
        background: "white !important",
        color: "black",
        fontWeight: "bold",
        border: "2px solid white",
        borderRadius: "20px",
},
links:{
    display: "flex",
    marginLeft: "130px",
    "& :Link":{
        color: "white",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "bold",
    },
    gap: "0px 30px",
    [theme.breakpoints.down("sm")]:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "20px",
        "& :Link":{
           padding: "20px 0px",
           color: "black",
        },

    },
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
},
}))

export default useStyle;