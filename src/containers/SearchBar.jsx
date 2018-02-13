import React from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from "../actions";

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    handleInputChange(e){
        this.setState({term: e.target.value});
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.props.onCitySearch(this.state.term)
        this.setState({term: ''})
    }

    render(){
        return(
            <section className="search-bar">
                <form className="form-inline" onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input type="text"
                           className="form-control search-bar__text-input"
                           placeholder="Search for City"
                           value={this.state.term}
                           onChange={(e) => this.handleInputChange(e)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </section>
        )

    }
}

//link redux to react

// function mapStateToProps(state){
//     return {
//         books: state.books
//     }
// }

function mapDispacthToProps(dispatch){
    return{
        onCitySearch: (city) => {dispatch(fetchWeather(city))}
    }
}

export default connect(null, mapDispacthToProps)(SearchBar)
