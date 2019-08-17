import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import Spinner from '../components/Spinner';
import unsplash from '../api/Unsplash.api';

class SinglePhotopage extends Component {
  state = {
    singlePhoto: {}
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    unsplash.photos
      .getPhotoStats(id)
      .then(toJson)
      .then(singlePhotoStats => {
        this.setState({ singlePhoto: singlePhotoStats });
      });
  }
  render() {
    if (Object.keys(this.state.singlePhoto).length === 0) return <Spinner />;
    return (
      <div className="row">
        <div className="col-md-4">
          {this.state.singlePhoto.hasOwnProperty('links') ? (
            <img
              src={this.state.singlePhoto.links.download}
              alt="singlePhoto"
              className="img-fluid"
            />
          ) : null}
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item">
              Views:{this.state.singlePhoto.views}
            </li>
            <li className="list-group-item">
              Downloads:{this.state.singlePhoto.downloads}
            </li>
            <li className="list-group-item">
              Likes:{this.state.singlePhoto.likes}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SinglePhotopage;
