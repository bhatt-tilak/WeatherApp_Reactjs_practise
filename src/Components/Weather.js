import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&
                <p className="weather__key">Location: 
                <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                </p> 
                }
                
                {this.props.temprature && 
                <p className="weather__key">Temprature: 
                <span className="weather__value"> {this.props.temprature}</span>
                </p>
                }

                {this.props.humidity && 
                <p className="weather__key">humidity: 
                <span className="weather__value"> {this.props.humidity}</span>
                </p>
                }

                {this.props.description && 
                <p className="weather__key">Conditions:  
                <span className="weather__value"> {this.props.description}</span>
                </p>
                }

                {this.props.error && 
                <p className="weather__error">
                {this.props.error}</p>
                }
            </div>
        )
    }
}

export default Weather
