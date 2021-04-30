/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        num: 0,
        name: props.name,
    };
this.add = this.add.bind(this);
this.sub = this.sub.bind(this);
this.Multi = this.Multi.bind(this);
this.div = this.div.bind(this);
}

add(){
    const num = this.state.num;
    const name = this.state.name;
    this.setstate({
        num: num + 1,
        name: name,
    });

}
sub(){
    const num =this.state.num;
    const name = this .state.name;
    this.setstate({
        num:num - 2,
        name:name,
    })
}
Multi(){
    const num = this.state.num;
    const name = this.state.name;
    this.setstate({
        num:num * 10,
        name:name,
    })
}
div(){
    const num = this.state.num;
    const name = this.state.name;
    this.setstate({
        num:num/5,
        name:name,
    })
}
render(){
    const num = this.state.num;
    const name = this.state.name;
  return(
            <div>
                <h1>{num}</h1>
                <h1>{name}</h1>
                <button
                    type="button"
                    onClick={this.add}
                    >
                 add 
                 </button>
                 <button
                      type="button"
                     onClick={this.sub}
                >
                    sub
                 </button>
                 <button
                     type="button"
                  onClick={this.Multi}
                 >
                 Multi
                </button>   

                <button
                      type="button"
                     onClick={this.div}
                >
                    div  
                </button>


              </div>
         );

     }
}
render(<App name="fizan" />, document.getElementById('root'));
