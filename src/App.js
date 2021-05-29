import React from 'react';

class App extends React.Component{
  //constructor method
 constructor(props){

   console.log('calling constructor method');
   super(props);
   this.state={
     data:'Hi Varatha'
   }
  //  this.change = this.change.bind(this);

   
 }
 
//getDerivedStateFromProps

// static getDerivedStateFromProps(props,state){

// console.log('calling getDerivedStateFromProps ');
// return {
//  data:props.text

// }
// }


//componentDidMount 

componentDidMount(){
  console.log('calling componentDidMount ');
  this.timerID = setInterval(
    ()=> this.tick(),
    2000
  )
}
tick(){
  console.log('calling tick method');
  if(this.state.data === 'Hi Varatha'){
    this.setState({
      data:' '
    })  
  }
  else{
    this.setState({
      data:'Hi Varatha'
    })
  }
}

//shouldComponentUpdate 
// shouldComponentUpdate(){
//   console.log('calling shouldComponentUpdate');
//   //return false;
//   return true;
// }

// change =() =>{
//   this.setState({
//     data:'changed'
//   })
// }

//render method
 render(){
   console.log('calling render method');
   return(
     <div>
       <h1>{this.state.data}</h1>
       {/* <button onClick={this.change}>Click</button> */}
     </div>
   )
 }

}

export default App;
