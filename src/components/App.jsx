import exampleVideoData from '../data/exampleVideoData.js';
// import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

console.log(exampleVideoData)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVid: exampleVideoData[0],
      videos: exampleVideoData
    }
  }
  handleClick (video) {
    this.state({
      currentVid: video
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <Search /> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}/>
          </div>
          <div className="col-md-5">
            <VideoList
              onClick={this.handleClick.bind(this)}
              videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
