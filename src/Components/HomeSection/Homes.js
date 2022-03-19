import React from 'react';
import useStyle from "./HomeStyle";
// import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {Dropdown} from 'react-bootstrap-v5';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'



const Homes = () => {
    const classes = useStyle();
  return (
    <div className={classes.main_home}>
    <div className={classes.text_main}>
    <h1>Marketplace</h1>
    <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <SearchIcon /> */}
            </div>
            <InputBase
              placeholder="Search Artist or Collection"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <DropdownButton className={classes.DropDown} id="dropdown-basic-button" title="" variant="light">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
          </div>
    </div>
    </div>
  )
}

export default Homes;