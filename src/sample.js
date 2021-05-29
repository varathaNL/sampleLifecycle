

import React from 'react';

class Sample extends React.Component{

  constructor(props){
    super(props);
    console.log('calling constructor');
    this.state={
    data:true
   }
   
  }

//   static getDerivedStateFromProps(props,state){
//     console.log('calling getDerivedStateFromProps ');
//     return{
//       name:props.text
//     }
//   }

//   componentDidMount(){
//       this.timerID = setInterval(
//           ()=> this.tick(),2000
//       )
      
//   }
//   tick(){
//       if(this.state.name ==='Appas'){
//           this.setState({
//               name :' '
//           })
//       } else{
//           this.setState({
//               name:'Appas'
//           })
//       }
//   }
// 
//   shouldComponentUpdate(){
//       console.log('calling  shouldComponentUpdate');
//       return true;

//   }

//   clickMe =()=>{
//       this.setState({
//           name:'varatha'
//       })
//   }
delete =()=>{
    this.setState({
        data:false
    })
}


  render(){
    console.log('callling render');
      let text;
      if(this.state.data){
          text = <Child/>
      }
    return(

      <div>
        <h1>{text}</h1>
        <button onClick={this.delete}> Click</button>

      </div>
    );
  }
   
}

export default Sample;

export class Child extends React.Component{
    componentWillUnmount(){
        console.log('calling componentWillUnmount');
        alert('its going to be delete')
    }
    render(){
        return(
            <div><h3>hello</h3></div>
            
        )
    }
}
