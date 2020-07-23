import React, {Component} from 'react';
import './header.css';
import sign from './sign.PNG';

const getDatetime = function(){
    const today = new Date() ;
    const date = today.getMonth()+1 + '/' +today.getDate()+ '/' +today.getFullYear();
    const time = today.getHours()+ ':' +today.getMinutes()+ ':' +today.getSeconds();

return(
    date+' '+time
);
}

class Header extends Component {
    state = {datetime: getDatetime()};
    componentDidMount() {
        setInterval(()=> this.setState({datetime: getDatetime()}), 1000 );

    }
    render(){
        return (
            <div>
                <div className="header"> Project <img src={sign}></img> {this.state.datetime} </div>
            </div>
        )
    }
}

export default Header;
