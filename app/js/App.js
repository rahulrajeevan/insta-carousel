'use strict';

import React from 'react';

import InstagramCarousel from './components/InstagramCarousel'

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    /**
     * Instagram data
     *
     * @type {{cliendId: string, accessToken: string}}
     */
    this.instagram = {
      cliendId: 'e1cbfb578e8c4cf5bb2244819a8eac5d',
      accessToken: '4024820467.e1cbfb5.e99e53c27f3c46ecb368d183542f1372'
    };
  }

  render() {
    return (
      <div>
        <InstagramCarousel
            accessToken={this.instagram.accessToken}
            limit="4"
        />
      </div>
    );
  }

}

App.propTypes = propTypes;

export default (
    <App />
);
