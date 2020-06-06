import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class MainComponent extends React.Component {
  render(){
    return (
      <div>Hello world</div>
    );
  }
}

export default MainComponent;
