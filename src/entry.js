import React from 'react';
import ReactDOM from 'react-dom';

require("./style.css");

const World = () => {
    return (
        <span> World </span>
    )
};

class Hello extends React.Component {
    render() {
        return <h1 className="red">Hello<World/></h1>
    }
};

ReactDOM.render(<Hello/>, document.getElementById('app'));