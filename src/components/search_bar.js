import React, { Component } from 'react';

//class components are needed if we'd like to keep internal record
//functional component, JSX is returned
// const SearchBar = () =>{
//   return <input />; //React.createElement --> that's why we need to import React at top
// };

class SearchBar extends Component{
	//constructor initializes instances and state
  constructor(props) {
  	//calling parent method with super
  	super(props);
//functional components don't have state, only class-based components do
//term is property on which we want to record change
  	this.state = { term: ''};
    //the above live can only be in the constructor, so every instance will take a copy of the current state
  }
  render() {
    console.log('HERE');
  	//in ES6 javascript elements in curly braces
  	//onChange is a react property
  	return (
     <div>
       <input
       value={this.state.term} 
       onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  } 

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
      // Value of input: {this.state.term}

export default SearchBar;