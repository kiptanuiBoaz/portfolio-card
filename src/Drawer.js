import React from "react";
import "./Drawer.css";
import { Link } from "react-router-dom";
class Drawer extends React.Component {
  render() {
    return (
      <div>
        <div className="outer-menu">
          <input className="checkbox-toggle" type="checkbox" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
