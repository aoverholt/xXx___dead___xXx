import React from 'react';

import Header from '../../components/Header';
import Post from '../../components/Post';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: 'mine',
      postData: {}
    };

    this.togglePostDisplay = this.togglePostDisplay.bind(this);
    //   this.getPost = this.getPost.bind(this);
  }

  togglePostDisplay(val) {
    this.setState({
      postDisplay: val
    });
  }

  async getPost(archive, postId) {
    // let myPost = await archive.readFile('/mine/posts/' + postId + '.json');
    // let post = JSON.parse(myPost);
    // this.setState({
    //   postData: post
    // });
  }

  componentDidMount() {
    const archive = this.props.data;
    this.getPost(archive, this.props.match.params.postId);
  }

  render() {
    return (
      <div className="App">
        <Header
          postDisplay={this.state.postDisplay}
          togglePostDisplay={this.togglePostDisplay}
        />
        <Post data={this.props.postData} />
      </div>
    );
  }
}

export default PostContainer;
