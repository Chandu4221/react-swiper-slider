import React from 'react';
import { connect } from 'react-redux';
import SingleImage from './SingleImage';
const ImageList = props => {
  console.log(props.allPhotos);
  return props.allPhotos.map(photoData => (
    <div className="card" key={photoData.id}>
      <SingleImage photoData={photoData} />
    </div>
  ));
};

const mapStateToProps = state => ({
  allPhotos: state.InitialPhots.allPhotos
});

export default connect(
  mapStateToProps,
  null
)(ImageList);
