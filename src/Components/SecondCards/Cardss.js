import React from 'react';
import useStyle from './CardsStylee';
import {Navbar,Container,Nav,Form,FormControl,Dropdown} from 'react-bootstrap-v5';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Cardss = () => {
 const classes = useStyle();
  return (
    <div className={classes.browserText}>
    <div className={classes.text_browser}>
        <h2>Browse</h2>
        <h5>(7480 results)</h5>
        <h5>Currency:</h5>
        <DropdownButton className={classes.DropDown} id="dropdown-basic-button" title="USD" variant="light">
  <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
  <Dropdown.Item href="#/action-2">ETH </Dropdown.Item>
</DropdownButton>
    </div>


    <div>
 <DropdownButton className={classes.DropDown1} id="dropdown-basic-button" title="Sort by" variant="light">
  <Dropdown.Item href="#/action-1">Lowest price</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Hightest price</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Most Recent</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>

</DropdownButton>
    </div>


    </div>
  )
}

export default Cardss;