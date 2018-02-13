import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

class GoogleMap extends Component {


//     componentDidMount(){
// //        const google = window.google;
//         let self = this;
//         //needed to asynchronously load the link each time
//         loadScript("https://maps.googleapis.com/maps/api/js", function() {
//             console.log('ready to render', self);
//             const google = window.google
//             console.log(google, self.props)

//             const mapRef =  self.refs.map;
//             console.log(mapRef)
//             const node = ReactDOM.findDOMNode(mapRef);
            
//             new google.maps.Map(node, {
//                 zoom: 12,
//                 center: {
//                     lat: self.props.lat,
//                     lng: self.props.lng
//                 }
//             })
//     });
//     }

    componentDidMount(){
        const google = window.google
        console.log(google, this.props)

        const mapRef =  this.refs.map;
        console.log(mapRef)
        const node = ReactDOM.findDOMNode(mapRef);
        
        new google.maps.Map(node, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    }

    render() {
        return (
            <div className="google-map" ref="map" />
        );
    }
}

export default GoogleMap;