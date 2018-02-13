import React, { Component } from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps'

export default withGoogleMap((props) => {
    console.log(props)
    return (
        <GoogleMap 
            defaultZoom={12} 
            defaultCenter={{lat: props.lat, lng: props.lng}} 
        />
    )
})