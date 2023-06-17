import React, {memo} from 'react';
import './style.scss'
import {Button, Col, Container, Nav, Navbar, Offcanvas, Row} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {pages, setActivePage} from "../../store/pageReducer";
import {useDispatch, useSelector} from "react-redux";

import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/avatar.svg'


const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()
  const activePage = useSelector(state => state.page.activePage)

  return (
    <Navbar sticky='top' bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Brand>
            {
              location.pathname !== '/' &&
              <Button
                className='mx-5 '
                variant='dark'
                size="lg"
                onClick={() => navigate(-1)}
              >
                Назад
              </Button>
            }
            <img
              onClick={() => navigate('/')}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              MitraSoft
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="p-3">
              <Row>
                {
                  pages.map(page =>
                    <Link
                      key={page.path}
                      to={page.path}
                      className={page.path === activePage?.path ? 'active' : ''}
                      onClick={() => dispatch(setActivePage(page.path))}
                    >
                      {page.name}
                    </Link>
                  )
                }
              </Row>
              <Link to='/me'>
                <Row className=''>
                  <Col className='col-6'><img src={avatar} alt="avatar"/></Col>
                  <Col className='col-6'>
                    <h4>Username</h4>
                    <p>email@mail.ru</p>
                  </Col>
                </Row>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default memo(Sidebar);