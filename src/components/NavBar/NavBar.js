import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItems, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import useStyles from './styles'

const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

   
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit" >
              <Toolbar>
                  <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit" >
                      <img src='' alt="PlaceHolder" height="25px" className={classes.image} />
                    
                  </Typography>
                  <div className={classes.grow}/>
                  {location.pathname === '/' && (
                  <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label ="Show cart Items" color='inherit'>
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                  </div>)}
              </Toolbar>
         </AppBar>  
        </>
    )
}
// TODO: create Logo
export default NavBar
