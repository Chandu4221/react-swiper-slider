import React, { createContext, Component } from 'react';
export const UnsplashContext = createContext();
//* To use Context we need
//* 1. we need to create the context
//* 2. we need a provider to provide the context to our apps
//* 3. we need to export the "Provider" to wrap the entire APP within the Provider tags
//* 4. we need to export the "Context", so the other components can "Consume"  the data
//* 5. Value attribute is the Key for the Context
//* 6. value need to be a object like {state:this.state,updateAge:this.updateAge}
//* 7. Reason for passing a value as object because we can pass the state as well as the actions(functions) which can be accessed from the consumer
export class UnsplashContextProvider extends Component {
  state = {
    allPhotos: []
  };

  photosInit = data => {
    //* perform some update
    this.setState({ allPhotos: data });
  };

  /**/

  render() {
    return (
      <UnsplashContext.Provider
        value={{
          state: this.state,
          photosInit: this.photosInit
        }}
      >
        {this.props.children}
      </UnsplashContext.Provider>
    );
  }
}
