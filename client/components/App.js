import React from 'react';
import NavigationBar from './navigationBar';
 export default class App extends React.Component{
    render(){
        return (
            <div className="continer">
                <NavigationBar/>
                {this.props.children}
            </div>
        );
    }
}