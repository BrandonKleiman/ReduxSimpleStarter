import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD2zPOA-bcAoYKm9iRe83iZcGZf10W5NME';



//Create a new component
//This component should produce some html

//Take component's generated HTML and put it on the page (in the DOM)

//Below App is an instance
//App was functional component and was refactored into class component so it can keep track of state of music videos
class App extends Component {
  constructor(props){
	super(props);
	
	this.state = { 
		videos: [],
		selectedVideo: null 
	};

    this.videoSearch('surfboards');
	
  }

  videoSearch(term) {
  	//Here would be ajax call
	YTSearch({key: API_KEY, term: term}, (videos) => {
	  this.setState({
	  	videos:videos,
	  	selectedVideo:videos[0]
	  });
	  //the above line is equal to this.setState({ videos: videos });
    });
  }
 		// <VideoDetail video={this.state.videos[0]}/>
  render (){
    return (
	  <div>
        <SearchBar 
          onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
	  </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));