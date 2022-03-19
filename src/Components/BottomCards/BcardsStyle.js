import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
    cards_main:{
            width: "100%",
            height: "10rem",
            display: "flex",
            justifyContent: "center",
          
    },      
    cards_parent:{
            width: "300px",
            height: "auto",
            marginBottom: "10px",
            // background: "green",
    },
    filter_main:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    filter:{
        border: "4px solid black",
        borderRadius: "20px",
        [theme.breakpoints.down("sm")]:{
                display: "none",
        },
    },
    accord:{
        position: "sticky",
        top: "10%",
        left: "0%",
    },
    head2:{
        fontWeight: "bold",
    },
    icon:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardsFlexx:{    
        display: "flex",
        width: "90%",
        justifyContent: "space-around",
        [theme.breakpoints.down("sm")]:{
                display: "block",
        },
        gap: "0px 20px",
        
    },
    cardssflex:{
display: "flex",
justifyContent: "center",
flexWrap: "wrap",
gap: "0px 20px",
    },
    photos:{
            
        "& img":{
            borderRadius: "20px",
            width: "100%",
            height: "260px",
        },
    },
}))


export default useStyle;