/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <h4>ABOUT US : </h4>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">
              <i class="fa-brands fa-facebook"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer">
              <i class="fa-brands fa-youtube"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/blog?ref=bdr-user-archive-footer">
              <i class="fa-brands fa-tiktok"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          <h4>Smart-IOT © {new Date().getFullYear()}</h4>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
