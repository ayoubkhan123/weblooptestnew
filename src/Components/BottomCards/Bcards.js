import React,{useState} from 'react';
import BcardsData from "./BcardsData";
import useStyle from "./BcardsStyle";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Crop32Icon from '@material-ui/icons/Crop32';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Bcards = () => {
   
    const classes = useStyle();
    const [Set, SetOpen] = useState(false);
    const Incre = () => {
            SetOpen(!Set)
    }
  return (

    // MAIN SECTION START FROM Here

    <div className={classes.cards_main}>

<div className={classes.cardsFlexx}>
<div className={classes.accord}>

<div className={classes.filter_main}>
{ Set &&<h2>Filters</h2>}
    <Button onClick={Incre}>
    <div className={classes.filter}><ArrowForwardIcon/></div></Button></div>
   {/* <div> */}
   { Set && (
       <div>
        

        {/* Accordions Start From Here */}


   <Accordion style={{width: "300px",}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <div style={{display: "flex"}}>  <Crop32Icon/><h5>on scale</h5></div>
          </Typography>
        </AccordionDetails>


      </Accordion>

      <Accordion style={{width: "300px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Drop Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{display: "flex"}}>  <Crop32Icon/><h5>Curated</h5></div>
          <div style={{display: "flex"}}>  <Crop32Icon/><h5>Varified</h5></div>

          </Typography>
        </AccordionDetails>

      </Accordion>

      <Accordion style={{width: "300px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Price (USD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <Accordion style={{width: "300px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Edition Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>

      </Accordion>
      
      
      </div>
      )}
      
   {/* </div> */}


</div>
<div className={classes.cardssflex}>

            {/* CARDS MAP HERE */}
  {
      BcardsData.map((elem) =>{
          return(
                <>
                <div className={classes.cards_parent}>
            <div className={classes.photos}>
                <img src={elem.img}/>
            </div>
            <div className={classes.icon}>
                <h5>{elem.head1}</h5>
                <FavoriteBorderIcon/>
            </div>
                <h5>{elem.head2}</h5>
                <h5>{elem.head3}</h5>
                <h5>{elem.head4}</h5>

    </div>





                </>
          )
      })
  }</div>
  </div>


    </div>
  )
}

export default Bcards;