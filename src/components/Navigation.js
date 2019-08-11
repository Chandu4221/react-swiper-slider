import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toJson } from 'unsplash-js';
import { NavLink } from 'react-router-dom';
import unsplash from '../api/Unsplash.api';
class Navigation extends Component {
  componentDidMount() {
    unsplash.photos
      .listPhotos(2, 15, 'latest')
      .then(toJson)
      .then(json => {
        this.props.loadInitialData(json);
      });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/" exact>
          Unsplash
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user" exact>
                Link
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  allPhotos: state.InitialPhots.allPhotos
});
const mapDispatchToProps = dispatch => ({
  loadInitialData: data => dispatch({ type: 'INITIAL_LOAD', payload: data })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
