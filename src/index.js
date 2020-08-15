import React from 'react';
import ReactDOM from 'react-dom';
function getButtonText(){
    return 'Press here!' ;
}

const App= ()=>{
    const buttonText= 'Click me !';
    return <div>
        <label className="label" htmlFor="name">
            Enter name:
        </label>
        <input id="name type="text />
        <button style={{backgroundColor:'red',color:'white'}}>
          {getButtonText()}
        </button>
    </div>;
};
    

ReactDOM.render(
    <App/>,document.querySelector('#root'));

    