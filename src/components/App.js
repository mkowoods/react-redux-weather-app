import React from 'react'
import SearchBar from '../containers/SearchBar'
import ForecastList from '../containers/ForecastList'

function App(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SearchBar/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ForecastList/>
                </div>
            </div>
            
        </div>
    )
}

export default App;
