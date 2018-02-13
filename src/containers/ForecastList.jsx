import React, { Component } from 'react';
import {connect} from 'react-redux'

import Chart from '../components/Chart'
import GoogleMap2 from '../components/GoogleMap2'


class ForecastList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const {lat, lon} = cityData.city.coord;
        const temps = cityData.list.map(forecast => forecast.main.temp) //note units are in kelvins for chart 
        const tempsFahrenheit = temps.map(temp => (temp * 9/5 - 459.67))
        const pressure = cityData.list.map(forecast => forecast.main.pressure)
        const humidity = cityData.list.map(forecast => forecast.main.humidity)


        return(
            <tr key={name} style={{minHeight : "100px"}}>
                <td >
                    {name}
                    <GoogleMap2 lat={lat} lng={lon}
                                containerElement={<div className="google-map" />}
                                mapElement={<div style={{ height: `100%` }} />}
                    />
                </td>
                <td><Chart data={tempsFahrenheit}    color="red"    units="F"/></td>
                <td><Chart data={pressure} color="blue"   units="hPa"/></td>
                <td><Chart data={humidity} color="orange" units="%"/></td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead> 
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather, 
    }
}

export default connect(mapStateToProps)(ForecastList);
