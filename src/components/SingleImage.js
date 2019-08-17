import React from 'react';
import { Link } from 'react-router-dom';

const SingleImage = props => {
  return (
    <div>
      <Link to={`photo/${props.photoData.id}`}>
        <img
          src={props.photoData.urls.small}
          className="card-img-top"
          alt={props.photoData.alt_description}
        />
      </Link>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img
            src={props.photoData.user.profile_image.small}
            alt={props.photoData.user.name}
            className="rounded"
          />
          <div>
            <Link
              to={`user/${props.photoData.user.username}`}
              className="nav-link"
            >
              <h5 className="mt-0 small">{props.photoData.user.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
