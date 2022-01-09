import React, { Fragment, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ReposPage from "../ReposComponent/ReposPage";
import NotFound from "../Pages/NotFound";
import GithubContext from "../Context/GitHub/GithubContext";
import Spinner from "../Layouts/Spinner";
import Row from "react-bootstrap/Row";

// const UsersItems = (props) => {
//   const githubState = useContext(GithubContext);

const UsersItems = ({
  user: {
    login,
    name,
    avatar_url,
    followers,
    following,
    location,
    email,
    bio,
    company,
    blog,
    public_repos,
    public_gists,
    html_url,
    hireable,
  },
  searchUser,
  loading,
  getRepos,
  joined,
  statusCode,
}) => {
  // useEffect(() => {
  //   searchUser(match.params.login);
  //   getRepos(match.params.login);
  //   // eslint-disable-next-line
  // }, []);

  const GithubUrl = () => {
    window.open(`https://github.com/${login}`);
  };

  return (
    <Fragment>
      <Col xs="12" sm="6" md="6" lg="4" xl="4">
        <dir className="userComp">
          <img className="userImage" src={avatar_url} alt="" />
          <h4 className="userName">{login}</h4>
          <Row className="userInfoContainer">
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <div className="leftUserInfo">
                <h2 className="uName">{name}</h2>
                <p className="otherUserInfo">
                  <i className="fas fa-users" />
                  {` Followers: ${followers}/ Following:
              ${following}`}
                </p>
                {location && (
                  <p className="otherUserInfo">
                    <i className="fa fa-map-marker" />
                    {` ${location}`}
                  </p>
                )}
                {joined && (
                  <p className="otherUserInfo">
                    <i className="far fa-clock" />
                    {` Joined ${joined[1]}/${joined[0]}`}
                  </p>
                )}
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <div className="rightUserInfo">
                {email && (
                  <p className="otherUserInfoRight">
                    <i className="fas fa-at" />
                    {` ${email}`}
                  </p>
                )}
                {blog && (
                  <p className="otherUserInfoRight">
                    <i className="fas fa-link" />
                    {` ${blog} `}
                    {blog.includes("http") ? (
                      <a href={blog} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    ) : (
                      <a
                        href={`http://${blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </p>
                )}
                {company && (
                  <p className="otherUserInfoRight">
                    <i className="fas fa-cubes" />
                    {` ${company}`}
                  </p>
                )}
                {bio && (
                  <p className="otherUserInfoRight">
                    <i className="fas fa-atlas" />
                    <span className="bioTitle">Biography:</span> {` ${bio}`}
                  </p>
                )}
              </div>
            </Col>
          </Row>
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
