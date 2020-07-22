import React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';



class Header extends Component{
  constructor(){
        super();
        this.state={
         isNavOpen: false,

        }
      this.toggleNav = this.toggleNav.bind(this);

    }
        toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  render(){
        
        return(
         
                <Navbar dark expand="md">
                 <NavbarToggler onClick={this.toggleNav}/>
                 <NavbarBrand className ="mr-auto" href="/">
                 SI
                </NavbarBrand>
         <Collapse isOpen={this.state.isNavOpen} navbar> 
            <Nav navbar>
               <NavItem>
                    <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span>About Me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/tools">
                    <span className="fa fa-home fa-lg"></span>Tools
                    </NavLink>
                </NavItem>
          
                <NavItem>
                    <NavLink className="nav-link" to="/projects">
                    <span className="fa fa-briefcase"></span>My Projects
                    </NavLink>
                </NavItem>
               
                <NavItem>
                    <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span>Contact Me
                    </NavLink>
                </NavItem>
                </Nav>
              
                </Collapse>
                </Navbar>
          
          
        );
  }
     
  
}

export default Header;