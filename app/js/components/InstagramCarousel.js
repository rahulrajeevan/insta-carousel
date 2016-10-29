'use strict';

import React from 'react';

import Slider from 'react-slick';
import jsonp from 'jsonp-promise';

class InstagramCarousel extends React.Component
{
    constructor(props) {
        super(props);

        this.data = [];
    }

    componentWillMount() {
        let accessToken = this.props.accessToken,
            userId = this.props.userId,
            limit = this.props.limit,
            endpoint = `https://api.instagram.com/v1/users/${userId}/media/recent/`
                + `?count=${limit}&access_token=${accessToken}`;

        /*
         * Request Instagram API for pictures
         */
        let promise = jsonp(endpoint).promise.then((response) => {

            // process response data (adding all images to data array)
            response.data.forEach((object) => {
                this.data.push(object.images.standard_resolution.url);
            });

            // update state of component
            this.setState({
                data: this.data
            });
        });
    }

    render() {
        let images = [];

        this.data.forEach((src, k) => {
            images.push(<div key={k} className="instagram-slider-image"><img src={src}/></div>);
        });

        if(!images.length) {
            images.push(<div key="0"><p className="instagram-slider-empty"></p></div>);
        }

        /*
         * Slider display settings
         */
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {images}
            </Slider>
        );
    }
}

InstagramCarousel.defaultProps = {
    userId: 'self',
    limit: 4,
    accessToken: false
};

export default InstagramCarousel;