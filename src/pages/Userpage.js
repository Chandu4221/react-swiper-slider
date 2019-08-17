import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import unsplash from '../api/Unsplash.api';
import Spinner from '../components/Spinner';
// import { connect } from 'react-redux';
class Userpage extends Component {
  state = {
    userdata: {},
    photos: []
  };
  componentDidMount() {
    let username = this.props.match.params.username;
    unsplash.users
      .profile(username)
      .then(toJson)
      .then(json => {
        console.log(json);
        this.setState({ userdata: json });
      });
  }
  render() {
    if (Object.keys(this.state.userdata).length === 0) return <Spinner />;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="text-center">
                <div className="profile-img-wrapper">
                  <img
                    src={this.state.userdata.profile_image.large}
                    alt={this.state.userdata.name}
                    className="img-fluid"
                  />
                </div>
                <div className="profile-name">{this.state.userdata.name}</div>
                <div className="bio">
                  <p>{this.state.userdata.bio}</p>
                </div>
              </div>
              <div>
                <ul className="list-inline d-flex justify-content-center">
                  <li>
                    <Link
                      to={`www.instagram.com/${
                        this.state.userdata.instagram_username
                      }`}
                      className="nav-link"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`www.twitter.com/${
                        this.state.userdata.twitter_username
                      }`}
                      className="nav-link"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {this.state.userdata.photos.map(photo => (
                  <div className="col-md-4" key={photo.id}>
                    <img src={photo.urls.full} className="img-fluid" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Todo :- check wheather user exists in the UsersProfile Reducer if exists show the profile else update the data into the store and show the Profile
// const mapStateToProps = state => ({});

export default Userpage;
