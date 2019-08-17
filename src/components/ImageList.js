import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import SingleImage from './SingleImage';
import Spinner from './Spinner';
const ImageList = props => {
  if (props.allPhotos.length === 0) return <Spinner />;
  const childELements = props.allPhotos.map(photoData => (
    <div className="col-md-3" key={photoData.id}>
      <div className="card my-2">
        <SingleImage photoData={photoData} />
      </div>
    </div>
  ));

  return (
    <div className="row">
      <div className="col-md-12">
        <Masonry className={'row'} elementType={'div'}>
          {childELements}
        </Masonry>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allPhotos: state.InitialPhots.allPhotos
});

export default connect(
  mapStateToProps,
  null
)(ImageList);
