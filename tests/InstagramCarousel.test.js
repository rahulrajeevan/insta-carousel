'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import InstagramCarousel from '../app/js/components/InstagramCarousel';

describe('Component: InstagramCarousel', function() {

  // access token for testing (use sandbox app)
  const access_token = '4024820467.e1cbfb5.e99e53c27f3c46ecb368d183542f1372';

  let rendered;
  let renderedWithAccessToken;
  let props = {
    accessToken: access_token
  };

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
        <InstagramCarousel />
    );

    renderedWithAccessToken = TestUtils.renderIntoDocument(
        <InstagramCarousel accessToken={access_token} />
    );
  }

  beforeEach(function() {
    props = {};
    renderComponent();
  });

  it('should render properly', function() {
    assert.doesNotThrow(TestUtils.scryRenderedDOMComponentsWithTag.bind(null, rendered, 'div'));
  });

  it('should render with empty slider', function() {
    assert.doesNotThrow(TestUtils.scryRenderedDOMComponentsWithClass.bind(null, rendered, 'instagram-slider-empty'));
  });

  it('should render with access token', (done) => {
    setTimeout(() => {
      done();

      let imageChildCount = TestUtils
          .scryRenderedDOMComponentsWithClass(renderedWithAccessToken, 'instagram-slider-image').length;

      // 2 - is slider additional components
      assert.equal(imageChildCount - 2, 4);

    }, 1500);

  });

});