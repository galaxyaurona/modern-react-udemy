import React, { Component } from "react"
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions"
import { Link } from "react-router-dom"

class PostShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params
            this.props.fetchPost(id)
        }

    }
    handleDeleteClick(){
        const {id} = this.props.match.params
        this.props.deletePost(id,()=>{
            this.props.history.push("/")
        })
    }
    render() {
        const { post } = this.props
        console.log("match", post)
        if (!post) {
            return <div className=""> Loading</div>
        }
        return (

            <div className="">
                <Link to="/"> Back to index</Link>

                <button onClick={this.handleDeleteClick.bind(this)} className="btn btn-xs btn-danger pull-right">
                    Delete post
                </button>
                <h3>Title: {post.title}</h3>
                <h6> Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
const mapStateToProps = ({ posts }, ownProps) => {
    console.log("own props", ownProps)
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)
