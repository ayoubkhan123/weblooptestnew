import React from 'react';
import useStyle from './CardStyle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardsData from "./CardsData";

const Card = () => {
    const classes = useStyle();
  return (
    <div className={classes.main_cards}>
    <div className={classes.text_flex}>
        <div>
                <h1 style={{marginBottom: "-5px"}}>Recent Curated Collections</h1>
                <span style={{color: "gray",fontSize: "20px"}}>Hand selected and exclusively dropped on Nifty Gateway</span>
        </div>

        <div className={classes.arrow}>
<ArrowBackIosIcon className={classes.arrow1}/>
<ArrowForwardIosIcon className={classes.arrow1}/>
        </div>
    </div>

<div className={classes.cards_flex}>
   {
       CardsData.map((elem) =>{
           return(
               <>
               <div className={classes.cardss}>
        <div className={classes.cards_set}>
            <img style={{}} src={elem.img}/>
        </div>
        <div>
            <h5>{elem.title}</h5>
        </div>

    </div>
               </>
           )
       })
   }
   </div>

   <div className={classes.text_flex2}>
        <div>
                <h1 style={{marginBottom: "-5px"}}>Recent Verified Collections</h1>
                <span style={{color: "gray",fontSize: "20px"}}>External listings that have been verified as legitimate and authentic by Nifty Gateway</span>
        </div>

        <div className={classes.arrow} >
<ArrowBackIosIcon className={classes.arrow1}/>
<ArrowForwardIosIcon className={classes.arrow1} />
        </div>
    </div>

<div className={classes.cards_flex}>
   {
       CardsData.map((elem) =>{
           return(
               <>
               <div className={classes.cardss}>
        <div className={classes.cards_set}>
            <img src={elem.img}/>
        </div>
        <div>
            <h5>{elem.title}</h5>
        </div>

    </div>
               </>
           )
       })
   }
   </div>
    </div>
  )
}

export default Card;