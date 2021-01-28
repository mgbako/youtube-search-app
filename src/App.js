import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './services/youtube';

class App extends React.Component{
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response.data.items)
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({selectedVideo: video})
  }

  componentDidMount(){
    this.onTermSubmit('flower');
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;