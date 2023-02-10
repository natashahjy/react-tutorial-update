import React from "react";
import { Link, Route, useLocation } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = (props) => {

  const { url } = useLocation;
  console.log(props);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${url}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};
export default About;
