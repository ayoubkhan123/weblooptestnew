import React from 'react';
import {Link} from "react-router-dom";
import useStyle from "./NavbarStyle";
import {Navbar,Container,Nav,Dropdown,} from 'react-bootstrap-v5';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";



const Navbar1 = () => {
  const classes = useStyle(); 
  return (
    <>

    {/* MAIN NAVBAR START FROM HERE */}

<Navbar expand="lg" fixed="top" className={classes.main_nav}>
  <Container fluid className={classes.btn1}>
    <div className={classes.head_logo}>
        <h1>N</h1>
      </div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className={classes.navbar}
        
        navbarScroll
      >
     
      <div className={classes.links}>

      {/* ROUTER LINKS */}

        <Link style={{color: "white"}} to="/">Curated Drops</Link>
        <Link style={{color: "white"}} to="/about">Verified Drops</Link>
        <Link style={{color: "white"}} to="/contact">Marketplace</Link>
        <Link style={{color: "white"}} to="/tests">Activity</Link>
        <div>
        <DropdownButton className={classes.DropDown} id="dropdown-basic-button" title="Company" variant="dark">
  <Dropdown.Item href="#/action-1">Whats is an NFT</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Create an NFT with us</Dropdown.Item>
  <Dropdown.Item href="#/action-3">About us</Dropdown.Item>
  <Dropdown.Item href="#/action-4">Advisory Services</Dropdown.Item>

</DropdownButton>
        </div>
  <SearchIcon style={{color: "white",}}/>
  <div className={classes.buttons}>
  <Button className={classes.btn2} variant="outlined">
  Log in
</Button>
 <Button className={classes.btn3} variant="contained">
      Sign up
    </Button></div>
      </div>
        
      </Nav>
    
    </Navbar.Collapse>
  </Container>
</Navbar>
     
    </>
  )
}

export default Navbar1;