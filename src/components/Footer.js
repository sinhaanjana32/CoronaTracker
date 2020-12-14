import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import Apps from '@material-ui/icons/Apps';


const useStyles = makeStyles({
  footer: {
    width: '100%',
    backgroundColor:"tomato",
    bottom: '0px',
    clear: 'both',
    position: 'relative',
    marginTop:'30px'
     },
   "& .MuiSvgIcon-root": {
     fill:"yellow",
     "&:hover": {
       fill:"tan",
       fontSize:"1.8rem",
     },
   }
  
})

const Footer =() => {

const classes = useStyles();

return(
<BottomNavigation  className={classes.footer} >

<BottomNavigationAction  style={{padding:0}}
icon={<Apps />}
href="https://anjanasinha.herokuapp.com/"/>

<BottomNavigationAction  style={{padding:0}}
icon={<GitHub/>}
href="https://github.com/sinhaanjana32"/>
  

<BottomNavigationAction style={{padding:0}}
 icon={<LinkedIn />}
 href="https://www.linkedin.com/in/anjana-sinha/"/>

<BottomNavigationAction style={{padding:0}}
icon={<Facebook/>}
href="https://www.facebook.com/anjana.sinhaa"/>

<BottomNavigationAction  style={{padding:0}}
icon={<Instagram/>}
href="https://www.instagram.com/anjana.sinha.india/"/>
 

</BottomNavigation>
);
}

export default Footer;