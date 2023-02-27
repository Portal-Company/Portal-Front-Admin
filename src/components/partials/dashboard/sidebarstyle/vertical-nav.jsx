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
            <span className="default-icon">Principal</span>
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
        <li
          className={`${location.pathname === "/" ? "active" : ""} nav-item `}
        >
          <Link
            className={`${location.pathname === "/" ? "active" : ""} nav-link `}
            aria-current="page"
            to="/"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Dashboard</Tooltip>}
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
            <span className="item-name">Estatistica</span>
          </Link>
        </li>

        <li>
          <hr className="hr-horizontal" />
        </li>
        <Nav.Item as="li" className="static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Páginas</span>
            <span className="mini-icon">-</span>
          </Link>
        </Nav.Item>

        <Accordion.Item
          as="li"
          eventKey="sidebar-auth"
          bsPrefix={`nav-item ${active === "auth" ? "active" : ""} `}
          onClick={() => setActive("user")}
        >
          <CustomToggle
            eventKey="area-curso"
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
            <span className="item-name">Area de Curso</span>
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

          <Accordion.Collapse eventKey="area-curso">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/curso/curso-add" ? "active" : ""
                  } nav-link`}
                  to="/curso/curso-add"
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
                    overlay={<Tooltip>Add User</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Adicionar Curso</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/curso/curso-list" ? "active" : ""
                  } nav-link`}
                  to="/curso/curso-list"
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
                  <span className="item-name">Listar Curso</span>
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
            eventKey="area-formacao"
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
            <span className="item-name">Area de Formação</span>
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

          <Accordion.Collapse eventKey="area-formacao">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/formacao/formacao-add"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/formacao/formacao-add"
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
                    overlay={<Tooltip>Add User</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Adicionar Formação</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/formacao/formacao-list"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/formacao/formacao-list"
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
                  <span className="item-name">Listar Formação</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="area-disciplina"
          bsPrefix={`nav-item ${active === "pulgins" ? "active" : ""} `}
          onClick={() => setActive("pulgins")}
        >
          <CustomToggle
            eventKey="area-disciplina"
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
            <span className="item-name">Area de Funcionários</span>
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

          <Accordion.Collapse eventKey="area-disciplina">
            <ul className="sub-nav">
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
                    overlay={<Tooltip>Adicionar Funcionario</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Adicionar Funcionário</span>
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
                    overlay={<Tooltip>Listar Disciplina</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Listar Funcionário</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="area-disciplina"
          bsPrefix={`nav-item ${active === "pulgins" ? "active" : ""} `}
          onClick={() => setActive("pulgins")}
        >
          <CustomToggle
            eventKey="area-provincia"
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
            <span className="item-name">Area de Departamento</span>
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

          <Accordion.Collapse eventKey="area-provincia">
            <ul className="sub-nav">
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
                    overlay={<Tooltip>Adicionar Província</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Adicionar Departamento</span>
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
                    overlay={<Tooltip>Listar Províncias</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Listar Departamento</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

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
            <span className="item-name">Perfil de Saída</span>
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
                    overlay={<Tooltip>Configurar Perfil</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Configurar Perfil</span>
                </Link>
              </Nav.Item>
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
                    overlay={<Tooltip>Ver Perfil</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Ver Perfil</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="area-inscritos"
          bsPrefix={`nav-item ${active === "pulgins" ? "active" : ""} `}
          onClick={() => setActive("pulgins")}
        >
          <CustomToggle
            eventKey="area-inscritos"
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
            <span className="item-name">Area de Inscritos</span>
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

          <Accordion.Collapse eventKey="area-inscritos">
            <ul className="sub-nav">
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
                    overlay={<Tooltip>Adicionar Actividade</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> A </i>
                  </OverlayTrigger>
                  <span className="item-name">Inscritos</span>
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
                    overlay={<Tooltip>Listar Disciplina</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Inscritos Rejeitado</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/extra/blank-page" ? "active" : ""
                  } nav-link`}
                  to="/extra/blank-page"
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
                    overlay={<Tooltip>Listar Disciplina</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> U </i>
                  </OverlayTrigger>
                  <span className="item-name">Inscritos Aceites</span>
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
