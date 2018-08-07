import React from 'react';
import axios from 'axios';


export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                name : ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(event) {
        // alert();
        const preState = this.state.list;
        preState[event.target.name] = event.target.value;
        this.setState({list:preState});
    }
    handleClick() {

       
        axios.put(`http://localhost:8000/${this.props.match.params.id}`, this.state.list)
            .then(function (response) {
                console.log('saved successfully')
            });
    }
    componentWillMount() {
        axios.get(`http://localhost:8000/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response);

                this.setState({list: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        alert();
        return (
            <div>
                <form>
                    Name:<input name="name" type="input" value={this.state.list.name} onChange={this.handleChange}/><br/>
                    <button type="button" onClick={this.handleClick}>Edit</button>
                </form>
            </div>
        )
    }

}