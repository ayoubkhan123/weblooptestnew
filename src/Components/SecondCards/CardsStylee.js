import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
    browserText:{
        width: "100%",
        height: "10rem",
        display: "flex",
        marginTop: "100px",
        flexWrap: "wrap",
        [theme.breakpoints.down("sm")]:{
                display: "flex",
                flexDirection: "column",
                margin: "0px",
                padding: "0px",
        },
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 100px",
    },
    text_browser:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    DropDown1:{
        background: "none",
        border: "3px solid gray !important",
        fontWeight: "bold",
        borderRadius: "40px",
        "& .btn-light":{
            boxShadow: "none",
            backgroundColor: "none",
            border: "none",
            borderRadius: "40px",

        },
        "& .btn-light.dropdown-toggle:focus":{
            boxShadow: "none",
            background: "none",
            border: "none",
            borderRadius: "40px",


        },
    },
    DropDown:{
        background: "none",
        fontWeight: "bold",
        borderRadius: "40px",
        "& .btn-light":{
            boxShadow: "none",
            backgroundColor: "none",
            border: "none",
            borderRadius: "40px",

        },
        "& .btn-light.dropdown-toggle:focus":{
            boxShadow: "none",
            background: "none",
            border: "none",
            borderRadius: "40px",


        },
    },

}))


export default useStyle;