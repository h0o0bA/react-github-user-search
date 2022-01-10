import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const UsersItems = ({ user: { login, avatar_url } }) => {
  const GithubUrl = () => {
    window.open(`https://github.com/${login}`);
  };

  return (
    <Fragment>
      <Col xs="12" sm="6" md="6" lg="4" xl="4">
        <dir className="userComp">
          <img className="userImage" src={avatar_url} alt="" />
          <h4 className="userName">{login}</h4>
          <Link onClick={GithubUrl} to="/">
            <Button className="userPtofileBtn" variant="outline-danger">
              Profile
            </Button>
          </Link>
        </dir>
      </Col>
    </Fragment>
  );
};

export default UsersItems;
