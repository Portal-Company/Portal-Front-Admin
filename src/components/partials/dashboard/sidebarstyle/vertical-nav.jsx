import { useState, useContext, memo, Fragment } from "react";

//Router
import { Link, useLocation } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Nav,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");

  //location
  let location = useLocation();

  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
        <li className="nav-item static-item">
          <Link
            className="nav-link static-item disabled text-start"
            to="#"
            tabIndex="-1"
          >
            <span className="default-icon">Home</span>
            <span
              className="mini-icon"
              data-bs-toggle="tooltip"
              title="Home"
              data-bs-placement="right"
            >
              -
            </span>
          </Link>
        </li>

        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${active === "crypto" ? "active nav-link" : ""} `}
        >
          <Link
            className={`${
              location.pathname === "/crypto" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/crypto"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Crypto</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M10.1167 0.333496H3.88856C1.61893 0.333496 0.333008 1.61942 0.333008 3.88905V10.1113C0.333008 12.3809 1.61893 13.6668 3.88856 13.6668H10.1167C12.3863 13.6668 13.6663 12.3809 13.6663 10.1113V3.88905C13.6663 1.61942 12.3863 0.333496 10.1167 0.333496Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.91244 5.24609C3.61022 5.24609 3.36133 5.49498 3.36133 5.80313V10.3839C3.36133 10.6861 3.61022 10.935 3.91244 10.935C4.22059 10.935 4.46948 10.6861 4.46948 10.3839V5.80313C4.46948 5.49498 4.22059 5.24609 3.91244 5.24609Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.02279 3.05957C6.72057 3.05957 6.47168 3.30846 6.47168 3.61661V10.384C6.47168 10.6862 6.72057 10.9351 7.02279 10.9351C7.33094 10.9351 7.57983 10.6862 7.57983 10.384V3.61661C7.57983 3.30846 7.33094 3.05957 7.02279 3.05957Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.0932 7.66406C9.78502 7.66406 9.53613 7.91295 9.53613 8.2211V10.3841C9.53613 10.6863 9.78502 10.9352 10.0872 10.9352C10.3954 10.9352 10.6443 10.6863 10.6443 10.3841V8.2211C10.6443 7.91295 10.3954 7.66406 10.0932 7.66406Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Principal</span>
          </Link>
        </Accordion.Item>

        <li>
          <hr className="hr-horizontal" />
        </li>
        <Nav.Item as="li" className="static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Páginas</span>
            <span className="mini-icon">-</span>
          </Link>
        </Nav.Item>
        {/*<Accordion.Item
          as="li"
          eventKey="sidebar-special"
          bsPrefix={`nav-item ${active === "special" ? "active" : ""} `}
          onClick={() => setActive("special")}
        >
          <CustomToggle
            eventKey="sidebar-special"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Special Pages</Tooltip>}
            >
              <i className="icon">
                <svg
                  width="20"
                  className="icon-20"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M6.85044 12.5583C5.32841 11.6182 3.91355 10.5097 2.63172 9.25306C1.7268 8.35584 1.0357 7.26031 0.611238 6.05018C-0.147183 3.69015 0.735667 0.992986 3.20054 0.192264C4.50154 -0.216313 5.9165 0.034503 7.00449 0.866556C8.09289 0.0354335 9.50738 -0.215301 10.8085 0.192264C13.2733 0.992986 14.1621 3.69015 13.4037 6.05018C12.9827 7.25917 12.2957 8.3546 11.395 9.25306C10.1121 10.5083 8.69734 11.6167 7.17632 12.5583L7.01042 12.6667L6.85044 12.5583Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.00694 12.6666L6.85033 12.5583C5.32643 11.6183 3.90959 10.5098 2.62569 9.25304C1.71648 8.35707 1.02126 7.26144 0.593354 6.05016C-0.159142 3.69013 0.723708 0.992966 3.18858 0.192245C4.48958 -0.216332 5.9232 0.0346753 7.00694 0.873695V12.6666Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.153 4.66615C11.0191 4.65753 10.8943 4.5906 10.8081 4.48104C10.7218 4.37149 10.6815 4.22893 10.6966 4.08677C10.7111 3.61854 10.4447 3.19234 10.0338 3.02651C9.7733 2.95539 9.61553 2.67324 9.6807 2.39499C9.74255 2.12121 9.99891 1.95098 10.2566 2.0126C10.2891 2.018 10.3204 2.02979 10.3489 2.04737C11.1727 2.36439 11.7061 3.2176 11.6637 4.1505C11.6623 4.2919 11.6072 4.42665 11.5109 4.52387C11.4146 4.62109 11.2854 4.67244 11.153 4.66615Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Special Pages</span>
            <i className="right-icon">
              <svg
                className="icon-18 submit"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-special">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/special-pages/billing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/special-pages/billing"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Billing</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> B </i>
                  </OverlayTrigger>
                  <span className="item-name">Billing</span>
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/special-pages/calender"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/special-pages/calender"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Calender</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> C </i>
                  </OverlayTrigger>
                  <span className="item-name">Calender</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/special-pages/kanban"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/special-pages/kanban"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>kanban</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> K </i>
                  </OverlayTrigger>
                  <span className="item-name">kanban</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/special-pages/pricing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/special-pages/pricing"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Pricing</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> P </i>
                  </OverlayTrigger>
                  <span className="item-name">Pricing</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/special-pages/timeline"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/special-pages/timeline"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Timeline</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> T </i>
                  </OverlayTrigger>
                  <span className="item-name">Timeline</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
                
               
        <Accordion.Item
          as="li"
          eventKey="sidebar-auth"
          bsPrefix={`nav-item ${active === "auth" ? "active" : ""} `}
          onClick={() => setActive("user")}
        >
          <CustomToggle
            eventKey="sidebar-auth"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Users</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Authentication</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-auth">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-in" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-in"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Login</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> L </i>
                  </OverlayTrigger>
                  <span className="item-name">Login</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-up" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-up"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Register</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> R </i>
                  </OverlayTrigger>
                  <span className="item-name">Register</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/confirm-mail" ? "active" : ""
                  } nav-link`}
                  to="/auth/confirm-mail"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Confirm Mail</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> CM </i>
                  </OverlayTrigger>
                  <span className="item-name">Confirm Mail</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/lock-screen" ? "active" : ""
                  } nav-link`}
                  to="/auth/lock-screen"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Lock Screen</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> LS </i>
                  </OverlayTrigger>
                  <span className="item-name">Lock Screen</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/recoverpw" ? "active" : ""
                  } nav-link`}
                  to="/auth/recoverpw"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Recover password</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> RP </i>
                  </OverlayTrigger>
                  <span className="item-name">Recover password</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/two-factor" ? "active" : ""
                  } nav-link`}
                  to="/auth/two-factor"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Two Factor</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> TF </i>
                  </OverlayTrigger>
                  <span className="item-name">Two Factor</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/account-deactivate"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/auth/account-deactivate"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Account Deactive</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> AD </i>
                  </OverlayTrigger>
                  <span className="item-name">Account Deactive</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        */}
        <Accordion.Item
          as="li"
          eventKey="sidebar-user"
          bsPrefix={`nav-item ${active === "user" ? "active" : ""} `}
          onClick={() => setActive("user")}
        >
          <CustomToggle
            eventKey="sidebar-user"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Users</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Inscrições</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>

          <Accordion.Collapse eventKey="sidebar-user">
            <ul className="sub-nav">
              {/*
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/app/user-profile" ? "active" : ""
                  } nav-link`}
                  to="/app/user-profile"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>User Profile</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">User Profile</span>
                </Link>
              </Nav.Item>
              */}
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/app/user-add" ? "active" : ""
                  } nav-link`}
                  to="/app/user-add"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip></Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Fazer Inscrição</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/app/user-list" ? "active" : ""
                  } nav-link`}
                  to="/app/user-list"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>User List</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Ver Inscrições</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="utilities-error"
          bsPrefix={`nav-item ${active === "error" ? "active" : ""} `}
          onClick={() => setActive("error")}
        >
          <CustomToggle
            eventKey="utilities-error"
            active={activeMenu === "utilities-error" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Utilities</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Utilities</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="utilities-error">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/error-404" ? "active" : ""
                  } nav-link`}
                  to="/errors/error-404"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 404</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> E </i>
                  </OverlayTrigger>
                  <span className="item-name">Error 404</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/error-500" ? "active" : ""
                  } nav-link`}
                  to="/errors/error-500"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 500</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> E </i>
                  </OverlayTrigger>
                  <span className="item-name">Error 500</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/maintenance" ? "active" : ""
                  } nav-link`}
                  to="/errors/maintenance"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Maintenance</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> M </i>
                  </OverlayTrigger>
                  <span className="item-name">Maintenance</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="plugins"
          bsPrefix={`nav-item ${active === "pulgins" ? "active" : ""} `}
          onClick={() => setActive("pulgins")}
        >
          <CustomToggle
            eventKey="plugins"
            active={activeMenu === "plugins" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Plugins</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Plugins</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="plugins">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/apexcharts" ? "active" : ""
                  } nav-link`}
                  to="/plugins/apexcharts"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Apexcharts</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Apexcharts</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/button-hover"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/plugins/button-hover"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Button Hover</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> BH </i>
                  </OverlayTrigger>
                  <span className="item-name">Button Hover</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/choise-js" ? "active" : ""
                  } nav-link`}
                  to="/plugins/choise-js"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Choise Js</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> C </i>
                  </OverlayTrigger>
                  <span className="item-name">Choise Js</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/flatpickr" ? "active" : ""
                  } nav-link`}
                  to="/plugins/flatpickr"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Flatpicker</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> F </i>
                  </OverlayTrigger>
                  <span className="item-name">Flatpicker</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/fslightbox" ? "active" : ""
                  } nav-link`}
                  to="/plugins/fslightbox"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>FSlightbox</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> F </i>
                  </OverlayTrigger>
                  <span className="item-name">FSlightbox</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/gallery-hover"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/plugins/gallery-hover"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Gallery Hover</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> GH </i>
                  </OverlayTrigger>
                  <span className="item-name">Gallery Hover</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/image-copper"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/plugins/image-copper"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Image Cropper</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> I </i>
                  </OverlayTrigger>
                  <span className="item-name">Image Cropper</span>
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/loader" ? "active" : ""
                  } nav-link`}
                  to="/plugins/loader"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Loader</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> L </i>
                  </OverlayTrigger>
                  <span className="item-name">Loader</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/rating" ? "active" : ""
                  } nav-link`}
                  to="/plugins/rating"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Rating</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> R </i>
                  </OverlayTrigger>
                  <span className="item-name">Rating</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/select2" ? "active" : ""
                  } nav-link`}
                  to="/plugins/select2"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Select2</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> S </i>
                  </OverlayTrigger>
                  <span className="item-name">Select2</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/sweet-alert" ? "active" : ""
                  } nav-link`}
                  to="/plugins/sweet-alert"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Sweet Alert</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> SA </i>
                  </OverlayTrigger>
                  <span className="item-name">Sweet Alert</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/quill-editor"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/plugins/quill-editor"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Quill</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> Q </i>
                  </OverlayTrigger>
                  <span className="item-name">Quill</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/plugins/uppy" ? "active" : ""
                  } nav-link`}
                  to="/plugins/uppy"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Uppy</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Uppy</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Nav.Item as="li">
          <Link
            className={`${
              location.pathname === "/extra/blank-page" ? "active" : ""
            } nav-link`}
            to="/extra/blank-page"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Blank Page</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                title="Blank Page"
                data-bs-placement="right"
              >
                <svg
                  width="20"
                  className="icon-20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Blank Page</span>
          </Link>
        </Nav.Item>
        <li>
          <hr className="hr-horizontal" />
        </li>
        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Elements</span>
            <span className="mini-icon">-</span>
          </Link>
        </li>
        <Accordion.Item as="li" eventKey="sidebar-ui" bsPrefix="nav-item">
          <CustomToggle
            eventKey="sidebar-ui"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Ui Elements</Tooltip>}
            >
              <i className="icon">
                <svg
                  width="20"
                  className="icon-20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M13.7505 9.70303V7.68318C13.354 7.68318 13.0251 7.36377 13.0251 6.97859V4.57356C13.0251 4.2532 12.764 4.00049 12.4352 4.00049H5.7911C3.70213 4.00049 2 5.653 2 7.68318V10.1155C2 10.3043 2.07737 10.4828 2.21277 10.6143C2.34816 10.7449 2.53191 10.8201 2.72534 10.8201C3.46035 10.8201 4.02128 11.3274 4.02128 11.9944C4.02128 12.6905 3.45068 13.2448 2.73501 13.2533C2.33849 13.2533 2 13.5257 2 13.9203V16.3262C2 18.3555 3.70213 19.9995 5.78143 19.9995H12.4352C12.764 19.9995 13.0251 19.745 13.0251 19.4265V17.3963C13.0251 17.0027 13.354 16.6917 13.7505 16.6917V14.8701C13.354 14.8701 13.0251 14.5497 13.0251 14.1655V10.4076C13.0251 10.0224 13.354 9.70303 13.7505 9.70303Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.9787 11.9948C19.9787 12.69 20.559 13.2443 21.265 13.2537C21.6615 13.2537 22 13.5262 22 13.9113V16.3258C22 18.3559 20.3075 20 18.2186 20H15.0658C14.7466 20 14.4758 19.7454 14.4758 19.426V17.3967C14.4758 17.0022 14.1567 16.6921 13.7505 16.6921V14.8705C14.1567 14.8705 14.4758 14.5502 14.4758 14.1659V10.4081C14.4758 10.022 14.1567 9.70348 13.7505 9.70348V7.6827C14.1567 7.6827 14.4758 7.36328 14.4758 6.9781V4.57401C14.4758 4.25366 14.7466 4 15.0658 4H18.2186C20.3075 4 22 5.64406 22 7.6733V10.0407C22 10.2286 21.9226 10.4081 21.7872 10.5387C21.6518 10.6702 21.4681 10.7453 21.2747 10.7453C20.559 10.7453 19.9787 11.31 19.9787 11.9948Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Ui Elements</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-ui">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/avatars" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/avatars"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Avatars</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Avatars</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/alerts" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/alerts"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Alerts</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Alerts</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/badges" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/badges"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Badges</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> B </i>
                  </OverlayTrigger>
                  <span className="item-name">Badges</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/breadcrumb"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/breadcrumb"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Breadcrumb</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> B </i>
                  </OverlayTrigger>
                  <span className="item-name">Breadcrumb</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/buttons" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/buttons"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Buttons</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> B </i>
                  </OverlayTrigger>
                  <span className="item-name">Buttons</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/button-group"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/button-group"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Buttons</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> BG </i>
                  </OverlayTrigger>
                  <span className="item-name">Button Groups</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/offcanvas"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/offcanvas"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Offcanvas</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> O </i>
                  </OverlayTrigger>
                  <span className="item-name">Offcanvas</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/color" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/color"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Colors</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> C </i>
                  </OverlayTrigger>
                  <span className="item-name">Colors</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/cards" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/cards"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Cards</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> C </i>
                  </OverlayTrigger>
                  <span className="item-name">Cards</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/carousel"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/carousel"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Carousel</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> CR </i>
                  </OverlayTrigger>
                  <span className="item-name">Carousel</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/grid" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/grid"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Grid</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> G </i>
                  </OverlayTrigger>
                  <span className="item-name">Grid</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/images" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/images"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Images</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> I </i>
                  </OverlayTrigger>
                  <span className="item-name">Images</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/list-groups"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/list-groups"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>list Group</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> LG </i>
                  </OverlayTrigger>
                  <span className="item-name">list Group</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/modal" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/modal"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Modal</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> M </i>
                  </OverlayTrigger>
                  <span className="item-name">Modal</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/notifications"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/notifications"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Notifications</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> N </i>
                  </OverlayTrigger>
                  <span className="item-name">Notifications</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/pagination"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/pagination"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Pagination</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> P </i>
                  </OverlayTrigger>
                  <span className="item-name">Pagination</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/popovers"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/popovers"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Popovers</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> PO </i>
                  </OverlayTrigger>
                  <span className="item-name">Popovers</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/progressbars"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/progressbars"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Progressbars</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> P </i>
                  </OverlayTrigger>
                  <span className="item-name">Progressbars</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/typography"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/typography"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Typography</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> T </i>
                  </OverlayTrigger>
                  <span className="item-name">Typography</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/tabs" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/tabs"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tabs</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> T </i>
                  </OverlayTrigger>
                  <span className="item-name">Tabs</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/tooltips"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/tooltips"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tooltips</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> TT </i>
                  </OverlayTrigger>
                  <span className="item-name">Tooltips</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/embed-video"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/embed-video"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Video</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> V </i>
                  </OverlayTrigger>
                  <span className="item-name">Video</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-widget"
          bsPrefix={` ${
            location.pathname === "/widget/widgetbasic" ||
            location.pathname === "/widget/widgetchart" ||
            location.pathname === "/widget/widgetcard"
              ? "active"
              : "" || active === "widget"
              ? "active"
              : ""
          } nav-item`}
          onClick={() => setActive("widget")}
        >
          <CustomToggle
            eventKey="sidebar-widget"
            active={activeMenu === "sidebar-widget" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>widget</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">widget</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-widget">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widget/widgetbasic" ? "active" : ""
                  } nav-link`}
                  to="/widget/widgetbasic"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget Basic</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> WB </i>
                  </OverlayTrigger>
                  <span className="item-name">Widget Basic</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widget/widgetchart" ? "active" : ""
                  } nav-link`}
                  to="/widget/widgetchart"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget Chart</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> WC </i>
                  </OverlayTrigger>
                  <span className="item-name">Widget Chart</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widget/widgetcard" ? "active" : ""
                  } nav-link`}
                  to="/widget/widgetcard"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget Card</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> WC </i>
                  </OverlayTrigger>
                  <span className="item-name">Widget Card</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-maps"
          bsPrefix={`nav-item ${active === "maps" ? "active" : ""} `}
          onClick={() => setActive("maps")}
        >
          <CustomToggle
            eventKey="sidebar-maps"
            active={activeMenu === "sidebar-maps" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger placement="right" overlay={<Tooltip>Maps</Tooltip>}>
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z"
                    fill="currentColor"
                  ></path>
                  <ellipse
                    opacity="0.4"
                    cx="12"
                    cy="21"
                    rx="5"
                    ry="1"
                    fill="currentColor"
                  ></ellipse>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Maps</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-maps">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/map/google" ? "active" : ""
                  } nav-link`}
                  to="/map/google"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Google</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> G </i>
                  </OverlayTrigger>
                  <span className="item-name">Google</span>
                </Link>
              </Nav.Item>
              {/* <Nav.Item as="li">
                                <Link className={`${location.pathname === '/map/vector' ? 'active' : ''} nav-link`} to="/map/vector">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Vector</Tooltip>}>
                                        <i className="sidenav-mini-icon"> V </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Vector</span>
                                </Link>
                            </Nav.Item> */}
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-form"
          bsPrefix={`nav-item ${active === "form" ? "active" : ""} `}
          onClick={() => setActive("form")}
        >
          <CustomToggle
            eventKey="sidebar-form"
            active={activeMenu === "sidebar-form" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger placement="right" overlay={<Tooltip>Form</Tooltip>}>
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Form</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-form">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-element" ? "active" : ""
                  } nav-link`}
                  to="/form/form-element"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Elements</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> E </i>
                  </OverlayTrigger>
                  <span className="item-name">Elements</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-wizard" ? "active" : ""
                  } nav-link`}
                  to="/form/form-wizard"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Wizard</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> W </i>
                  </OverlayTrigger>
                  <span className="item-name">Wizard</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-validation"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/form/form-validation"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Validation</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> V </i>
                  </OverlayTrigger>
                  <span className="item-name">Validation</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-table"
          bsPrefix={`nav-item ${active === "table" ? "active" : ""} `}
          onClick={() => setActive("table")}
        >
          <CustomToggle
            eventKey="sidebar-table"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Table</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 5C2 4.44772 2.44772 4 3 4H8.66667H21C21.5523 4 22 4.44772 22 5V8H15.3333H8.66667H2V5Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                  <path
                    d="M6 8H2V11M6 8V20M6 8H14M6 20H3C2.44772 20 2 19.5523 2 19V11M6 20H14M14 8H22V11M14 8V20M14 20H21C21.5523 20 22 19.5523 22 19V11M2 11H22M2 14H22M2 17H22M10 8V20M18 8V20"
                    stroke="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Table</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-table">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/bootstrap-table"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/table/bootstrap-table"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Bootstrap Table</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> BT </i>
                  </OverlayTrigger>
                  <span className="item-name">Bootstrap Table</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/border-table" ? "active" : ""
                  } nav-link`}
                  to="/table/border-table"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Border Table</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> B </i>
                  </OverlayTrigger>
                  <span className="item-name">Border Table</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/fancy-data" ? "active" : ""
                  } nav-link`}
                  to="/table/fancy-table"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Fancy Table</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> F </i>
                  </OverlayTrigger>
                  <span className="item-name">Fancy Table</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-icons"
          bsPrefix={`nav-item mb-5 ${active === "icons" ? "active" : ""} `}
          onClick={() => setActive("icons")}
        >
          <CustomToggle
            eventKey="sidebar-icons"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Icons</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M8 10.5378C8 9.43327 8.89543 8.53784 10 8.53784H11.3333C12.4379 8.53784 13.3333 9.43327 13.3333 10.5378V19.8285C13.3333 20.9331 14.2288 21.8285 15.3333 21.8285H16C16 21.8285 12.7624 23.323 10.6667 22.9361C10.1372 22.8384 9.52234 22.5913 9.01654 22.3553C8.37357 22.0553 8 21.3927 8 20.6832V10.5378Z"
                    fill="currentColor"
                  />
                  <rect
                    opacity="0.4"
                    x="8"
                    y="1"
                    width="5"
                    height="5"
                    rx="2.5"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Icons</span>
            <i className="right-icon">
              <svg
                className="icon-18"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-icons">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/solid" ? "active" : ""
                  } nav-link`}
                  to="/icon/solid"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Solid</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> S </i>
                  </OverlayTrigger>
                  <span className="item-name">Solid</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/outline" ? "active" : ""
                  } nav-link`}
                  to="/icon/outline"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Outlined</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> O </i>
                  </OverlayTrigger>
                  <span className="item-name">Outlined</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/dual-tone" ? "active" : ""
                  } nav-link`}
                  to="/icon/dual-tone"
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Dual Tone</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> D </i>
                  </OverlayTrigger>
                  <span className="item-name">Dual Tone</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
