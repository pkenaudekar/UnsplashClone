import React, { useState } from 'react';
import { Nav, Button, Collapse, Card } from 'react-bootstrap';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <header className="py-3 border-bottom">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-row w-50">
            <img
              src="logo/unsplash.png"
              className="img-fluid"
              alt="unsplash-logo"
              width="39"
            />
            <button type="button" className="btn btn-outline-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
            <form
              className="w-75 me-3"
              wtx-context="8509485A-56D4-4F62-977A-051479399CC4"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search free high-resolution photos"
                aria-label="Search"
                wtx-context="653F5E1F-609A-47DE-8319-1154725B2F23"
              />
            </form>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ marginLeft: '-15px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-view-list"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Advertise
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Blog
              </a>
            </li>
          </ul>
          <div className="vr"></div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Log in
              </a>
            </li>
            <li>
              <Button variant="outline-secondary">Submit a photo</Button>
            </li>
          </ul>
          <div>
            <Nav className="navbar navbar-dark">
              <div className="container-fluid">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variant="outline-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Button>
              </div>
            </Nav>
            <div>
              <Collapse in={open} dimension="height">
                <div id="example-collapse-text">
                  <Card
                    body
                    style={{ width: '400px', zIndex: 3, position: 'absolute' }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </header>
      <Nav className="py-2 mb-bottom bg-light border-bottom">
        <div className="d-flex flex-wrap dropend">
          <ul className="nav me-auto">
            <li className="nav-item KHq0c">
              <a
                href="#"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Editorial
              </a>
            </li>
            <div className="vr"></div>
            <li className="nav-item KHq0c">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <div className="d-flex flex-column">
                  <span className="HmGUP">Featured</span>
                  <span className="S48vf">Holidays</span>
                </div>
              </a>
            </li>
            <li className="nav-item  KHq0c">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <div className="d-flex flex-column">
                  <span className="HmGUP">Featured</span>
                  <span className="S48vf">Blockchain</span>
                </div>
              </a>
            </li>
            <li className="nav-item  KHq0c">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf">Wallpapers</span>
              </a>
            </li>
            <li className="nav-item  KHq0c">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">3D Renders</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Texture & Patterns</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Architecture</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Experiment</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Nature</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Buisness & Work</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Fashion</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Film</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Food & Drink</span>
              </a>
            </li>
            <li className="nav-item  KHq0c ">
              <a
                aria-current="page"
                className="nav-link link-dark active p7ajO "
                href="#"
              >
                <span className="S48vf KHq0c">Health & Wellness</span>
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
