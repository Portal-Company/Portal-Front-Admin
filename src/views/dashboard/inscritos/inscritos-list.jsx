import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// img
import shap1 from "/src/assets/images/shapes/01.png";
import shap2 from "/src/assets/images/shapes/02.png";
import shap3 from "/src/assets/images/shapes/03.png";
import shap4 from "/src/assets/images/shapes/04.png";
import shap5 from "/src/assets/images/shapes/05.png";
import shap6 from "/src/assets/images/shapes/06.png";

const userlist = [
  {
    name: "Hans Olo",
    phone: "+91 2586 253 125",
    email: "hansolo@gmail.com",
    country: "12",
    status: "Rejeitado",
    company: "Vehement Capital",
    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "Marge Arita",
    phone: "+27 5625 456 589",
    email: "margearita@gmail.com",
    country: "17",
    status: "Apurado",
    company: "Vehement Capital",
    joindate: "2019/12/01",
    color: "bg-success",
  },
];

/*<div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Pequisar"
                  aria-label="Search"
                />
              </div>*/

const UserList = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Inscrições</h4>
              </div>
            </Card.Header>
            <Card.Body className="px-0">
              <div className="table-responsive">
                <table
                  id="user-list-table"
                  className="table table-striped"
                  role="grid"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr className="ligth">
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Media</th>
                      <th>Status</th>
                      <th>Company</th>
                      <th>Data da Inscrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userlist.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>
                          <span className={`badge ${item.color}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.company}</td>
                        <td>{item.joindate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

UserList.displayName = "UserList";
export default UserList;
