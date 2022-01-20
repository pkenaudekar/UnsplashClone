import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Button, Collapse, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';
const Header = (): JSX.Element => {
  const [openLinks, setOpenLinks] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openVisualSearch, setOpenVisualSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    console.log('searchTerm ', searchTerm);
    navigate('/search', {
      state: {
        term: searchTerm,
        pageNo: 1,
      },
    });
  };

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  return (
    <div className="container-fluid sticky-top">
      <header className="py-3 border-bottom bg-light">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-row w-50">
            <Link to="/">
              <img
                src="logo/unsplash.png"
                className="img-fluid"
                alt="unsplash-logo"
                width="39"
              />
            </Link>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setOpenSearch(!openSearch)}
              aria-controls="search-unsplash"
              aria-expanded={openSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
            <div>
              <Collapse in={openSearch} dimension="height">
                <div id="search-unsplash">
                  <Card
                    body
                    style={{
                      width: '50vw',
                      zIndex: 3,
                      position: 'absolute',
                      left: '50px',
                      top: '70px',
                    }}
                  >
                    <div className="container">
                      <div className="search-unsplash-title">
                        <h5>Trending Searches</h5>
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-graph-up-arrow"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                            2022
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-graph-up-arrow"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                            christmas
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-graph-up-arrow"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                            landscape
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-graph-up-arrow"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                            cooking
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-graph-up-arrow"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                            tennis
                          </button>
                        </div>
                      </div>
                      <div className="search-unsplash-title">
                        <h5>Trending Topics</h5>
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-image"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>
                            Wallpapres
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-stopwatch"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                            </svg>
                            Athletics
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-palette"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                            </svg>
                            Textures & Patterns
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-house"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                              />
                            </svg>
                            Interiors
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-funnel"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                            </svg>
                            Experimental
                          </button>
                        </div>
                      </div>
                      <div className="search-unsplash-title">
                        <h5>Trending Collections</h5>
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Work from Anywhere
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Landscape
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Patterns
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Snow
                          </button>
                        </div>
                        <div className="search-unsplash-gap">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Food and Drink for Winter
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Collapse>
            </div>
            <form
              className="w-75 me-3"
              wtx-context="8509485A-56D4-4F62-977A-051479399CC4"
              onSubmit={handleSubmit}
            >
              <input
                name="search"
                type="search"
                className="form-control"
                placeholder="Search free high-resolution photos"
                aria-label="Search"
                wtx-context="653F5E1F-609A-47DE-8319-1154725B2F23"
                onChange={handleChange}
                value={searchTerm}
              />
            </form>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ marginLeft: '-15px' }}
              onClick={() => setOpenVisualSearch(!openVisualSearch)}
              aria-controls="visual-search"
              aria-expanded={openVisualSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-view-list"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
            <div>
              <Collapse in={openVisualSearch} dimension="height">
                <div id="visual-search">
                  <Card
                    body
                    style={{
                      width: '45vw',
                      zIndex: 3,
                      position: 'absolute',
                      left: '380px',
                      top: '70px',
                    }}
                  >
                    <div
                      className="container"
                      style={{
                        width: '45vw',
                        height: '45vh',
                      }}
                    ></div>
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/explore" className="nav-link px-2 link-dark">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/advertise" className="nav-link px-2 link-dark">
                Advertise
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link px-2 link-dark">
                Blog
              </Link>
            </li>
          </ul>
          <div className="vr"></div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/login" className="nav-link px-2 link-dark">
                Login
              </Link>
            </li>
            <li>
              <Button variant="outline-secondary">Submit a photo</Button>
            </li>
          </ul>
          <div>
            <Nav className="navbar navbar-dark">
              <div className="container-fluid">
                <Button
                  onClick={() => setOpenLinks(!openLinks)}
                  aria-controls="view-more-links"
                  aria-expanded={openLinks}
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
              <Collapse in={openLinks} dimension="height">
                <div id="view-more-links">
                  <Card
                    body
                    style={{
                      width: '45vw',
                      zIndex: 3,
                      position: 'absolute',
                      right: '45px',
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <div className="d-flex flex-row">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-briefcase"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                              </svg>
                            </div>
                            <div style={{ padding: '5px' }}>
                              <h6>Company</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex flex-row ">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-grid"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                              </svg>
                            </div>
                            <div style={{ padding: '5px' }}>
                              <h6>Product</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex flex-row ">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                              </svg>
                            </div>
                            <div style={{ padding: '5px' }}>
                              <h6>Community</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            About
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '15px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Developer/API
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Become a Contributor
                          </a>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            History
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '15px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Unsplash Dataset
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Topics
                          </a>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Join the Team
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '15px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Unsplash for iOS
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Collections
                          </a>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Press
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '15px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Apps & Plugins
                          </a>
                        </div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Trends
                          </a>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Contact Us
                          </a>
                        </div>
                        <div
                          className="col"
                          style={{ marginLeft: '15px' }}
                        ></div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Unsplash Awards
                          </a>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Help
                          </a>
                        </div>
                        <div
                          className="col"
                          style={{ marginLeft: '15px' }}
                        ></div>
                        <div className="col" style={{ marginLeft: '20px' }}>
                          <a href="#" className="nav-link px-2 link-dark">
                            Stats
                          </a>
                        </div>
                      </div>
                    </div>
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
              <Link
                to="/"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Editorial
              </Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item KHq0c">
              <Link
                to="/holidays"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <div className="d-flex flex-column">
                  <span className="HmGUP">Featured</span>
                  <span className="S48vf">Holidays</span>
                </div>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/blockchain"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <div className="d-flex flex-column">
                  <span className="HmGUP">Featured</span>
                  <span className="S48vf">Blockchain</span>
                </div>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/wallpapers"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf">Wallpapers</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/3d_renders"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">3D Renders</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/texture_patterns"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Texture & Patterns</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/architecture"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Architecture</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/experimental"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Experimental</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/nature"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Nature</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/business_work"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Buisness & Work</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/fashion"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Fashion</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/film"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Film</span>
              </Link>
            </li>
            <li className="nav-item KHq0c ">
              <Link
                to="/food_drink"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Food & Drink</span>
              </Link>
            </li>
            <li className="nav-item KHq0c">
              <Link
                to="/health_wellness"
                className="nav-link link-dark px-2 active p7ajO"
                aria-current="page"
              >
                <span className="S48vf KHq0c">Health & Wellness</span>
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
