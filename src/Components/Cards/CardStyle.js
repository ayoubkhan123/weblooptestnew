import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
main_cards:{
    width: "100%",
},
text_flex:{
display: "flex",
justifyContent: "space-between",
margin: "0px 100px",
flexWrap: "wrap",
[theme.breakpoints.down("sm")]:{
display: "flex",
paddingBottom: "10px",
justifyContent: "center",
},
[theme.breakpoints.down("xs")]:{
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    width: "80%",
    },

},
text_flex2:{
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 100px",
    flexWrap: "wrap",
    paddingTop: "60px",
    [theme.breakpoints.down("sm")]:{
        display: "flex",
        paddingBottom: "10px",
        justifyContent: "center",
        },
        [theme.breakpoints.down("xs")]:{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            width: "80%",
            },      
    },
cardss:{
    width: "28%",
    height: "150px",
    borderRadius: "30px",
    color: "white",
    [theme.breakpoints.down("sm")]:{
        width: "80%",
        height: "130px",
    },
    background: "gray",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
},
cards_set:{
    height: "100%",
    width: "265px",
    color: "white",
    "& img":{
        width: "90%",
        height: "100%",
        borderRadius: "20px 0px 0px 20px",
    },
},
arrow:{
    marginRight: "10px",
    // padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
},
arrow1:{
    marginRight: "10px",
    color: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    fontSize: "20px",
    cursor: "pointer",
},
cards_flex:{
    width: "100%",
    display: "flex",
    gap: "0px 20px",
    [theme.breakpoints.down("sm")]:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    justifyContent: "center",
    flexWrap: "wrap",
},

}))


export default useStyle;