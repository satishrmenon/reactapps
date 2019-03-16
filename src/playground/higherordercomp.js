import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = (props)=>{
    return(
        <div>
            <p>MyComponent</p>
            <p>The title is {props.title}</p>
        </div>
    )
}

const HOC = (SomeComponent)=>{
    return (props)=>(
        <div>
            {props.hocmsg && <h1>HOC </h1>}

            <SomeComponent {...props}/>
        </div>
    )
}

const FinalComponent = HOC(MyComponent);

ReactDOM.render(<FinalComponent hocmsg={true} title="MyComponentTitle"/>, document.getElementById('root'));


