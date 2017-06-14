import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import {Link} from "react-router-dom"



class PostsIndex extends Component {
    componentDidMount() {
 
        this.props.fetchPosts();
    }
    renderListPost(){
        return Object.keys(this.props.posts).map(key => {
            let post = this.props.posts[key]
            let postDetailsRoute = `/posts/${post.id}`
            return (
                    <li key={post.id} className="list-group-item">
                        <h4><strong>Title: </strong>{post.title}</h4>
      
                        <Link to={postDetailsRoute}>Go to details</Link>
                    </li>
            )
        })
    }
    render(){
        console.log("render",this.props.posts);
        //console.log(this.props.fetchPosts)
        return (
            <div className="">
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                     {this.renderListPost()}
                </ul>
           
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)