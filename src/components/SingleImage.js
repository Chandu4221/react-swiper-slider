import React from 'react';
import { Link } from 'react-router-dom';

const SingleImage = props => {
  return (
    <>
      <img
        src={props.photoData.urls.small}
        className="card-img-top"
        alt={props.photoData.alt_description}
      />
      <div className="card-body">
        <div className="media">
          <img
            src={props.photoData.user.profile_image.small}
            alt={props.photoData.user.name}
            className="mr-3 rounded"
          />
          <div className="media-body">
            <Link to={`users/${props.photoData.user.username}`}>
              <h5 className="mt-0">{props.photoData.user.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
