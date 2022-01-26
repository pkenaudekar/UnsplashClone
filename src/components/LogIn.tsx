import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const handlePasswordChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-3"></div>
        <div className="d-flex flex-column col-3 text-center my-3 wI2Er">
          <Link to="/">
            <img
              src="logo/unsplash.png"
              className="img-fluid login-logo"
              alt="unsplash-logo"
            />
          </Link>
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Welcome back.</p>
          <button type="button" className="btn btn-primary btn-sm AseRt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-facebook login-icon"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
            &nbsp;&nbsp;Login with Facebook
          </button>
          <div className="form-separator my-3 AseRt">
            <p>OR</p>
          </div>
          <form
            action="/login"
            acceptCharset="UTF-8"
            method="post"
            className="AseRt"
          >
            <input name="utf8" type="hidden" value="✓" />
            <input
              type="hidden"
              name="authenticity_token"
              value="/h3Th+7VkxTGwh9WPHrYI+FMV3WTWPFyYkbqsuhK36TY6zaH0NAmpNhm8Hwc/Np9oQq3UoWci96BPrIeVsUFxQ=="
            />

            <div className="form-group">
              <div className="d-flex flex-row justify-content-between my-1">
                <label htmlFor="user_email">Email address</label>
              </div>
              <input
                className="form-control uTw23e"
                onChange={handleEmailChange}
                value={email}
                type="email"
                name="user[email]"
                id="user_email"
              />
            </div>

            <div className="form-group">
              <div className="d-flex flex-row justify-content-between my-1">
                <label htmlFor="user_password">Password</label>
                <span>
                  <Link to="#">Forgot your password?</Link>
                </span>
              </div>

              <input
                className="form-control uTw23e"
                autoComplete="off"
                type="password"
                name="user[password]"
                id="user_password"
                wtx-context="0A09D70B-AD03-4277-AF69-9C65DE3B342D"
              />
            </div>

            <input
              type="hidden"
              name="after_authorization_action"
              id="after_authorization_action"
              className="js-after-authorization-action"
              wtx-context="E788CCCB-F431-4A5A-8FDF-260683E9ADA6"
            />
            <input
              type="hidden"
              name="after_authorization_object_id"
              id="after_authorization_object_id"
              className="js-after-authorization-object-id"
              wtx-context="1399442F-264D-48AE-B701-F8BA082932B4"
            />

            <div className="d-flex flex-column form-group my-3">
              <button type="button" className="btn btn-dark btn-sm uTw23e">
                Login
              </button>
            </div>
            <div className="login-alt-cta text-center">
              Don't have an account? <Link to="#">Join</Link>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default LogIn;
