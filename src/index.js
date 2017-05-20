import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDHHnqhK9Ik_9e7d7ywkN1dTBIBm63KyTc';


// Create a component that creates HTML
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     }

     this.videoSearch('rock climbing');


  }

  videoSearch (term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="content-container">
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className="video-container">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}


// Take this compoent's generated HTML and
// put it in the DOM

ReactDOM.render(< App />, document.getElementById('app'));
