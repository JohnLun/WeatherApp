import { Component } from "react";
import './InputInfo.css';
export default class InputInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: ''
        }
    }
    handleCityChange = () => {
        this.props.onChangeCity(this.state.inputCity);
    }
    
    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="Enter your location" value={this.state.inputCity} onChange={this.updateInputValue.bind(this)}/>
                <button type="button" onClick={this.handleCityChange}>
                    Submit  
                </button>
            </div>
        );
    }
    updateInputValue(evt) {
        this.setState({
            inputCity: evt.target.value
        })
    }
    
}
