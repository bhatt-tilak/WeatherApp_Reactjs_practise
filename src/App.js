import React, {Component} from 'react'

import Titles from './Components/Titles'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = "637f8fe7a0df74066614c4c69c9c5466"

class App extends Component {

    state = {
        temprature:  undefined,
        city:        undefined,
        country:     undefined,
        humidity:    undefined,
        description: undefined,
        error:       undefined
    }

    //arrow function allow you to use this independently and no binding required
    getWeather = async (e) => {
        //event handling
        e.preventDefault()

        const city=    e.target.elements.city.value
        const country= e.target.elements.country.value

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        //convert the response to json format 
        const data = await api_call.json()
        
        if(city && country){
            console.log(data)
            this.setState({
                temprature:     data.main.temp,
                city:           data.name,
                country:        data.sys.country,
                humidity:       data.main.humidity,
                description:    data.weather[0].description,
                error:          ""
            })
        }else{
            this.setState({
                temprature:     undefined,
                city:           undefined,
                country:        undefined,
                humidity:       undefined,
                description:    undefined,
                error:          "Please Enter The Name of City and Country ..."
            })
        } 
    }

    render(){
        return(
            //returns jsx which is a js code not html code
            //the ultimate coainter starts here
            <div> 
                <div className ="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather= {this.getWeather}/>
                                    <Weather 
                                        temprature=  {this.state.temprature}
                                        city=        {this.state.city}
                                        country=     {this.state.country}
                                        humidity=    {this.state.humidity}
                                        description= {this.state.description}
                                        error=       {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                 
            </div>
        )
    }
}


export default App


                
