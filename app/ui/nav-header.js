import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

class NavHeader extends React.Component {
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { anchorEl } = this.state;
        return (
            <nav className="root">
                <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className="menuButton" 
                        color="inherit" 
                        aria-label="Menu"
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        >
                        <MenuItem onClick={this.handleClose}>
                            <NavLink to="/">Inicio</NavLink>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavLink to="/restaurants">Restaurantes</NavLink>
                        </MenuItem>
                    </Menu>
                    <Typography variant="title" color="inherit" className="grow">
                        Desafio front
                    </Typography>
                    </Toolbar>
                </AppBar>
            </nav>
        )
    }
}

export default withStyles(styles)(NavHeader);