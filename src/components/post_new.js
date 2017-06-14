import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { createPost } from "../actions"


class PostNew extends Component {

    renderField(field) {
        const { error, touched } = field.meta
        console.log("error ", error, touched)
        const className = `form-group ${touched && error ? 'has-danger' : ''} `
        if (field.type == undefined) {
            field.type = "text"
        }
        return (
            <div className={className} >
                <label htmlFor="">{field.label}</label>
                <input {...field.input} className="form-control" type={field.type} />
                <div className="text-help">{field.meta.touched ? field.meta.error : ""}</div>
            </div>
        )
    }
    onSubmit(values) {
        //console.log("values", values, this);
   
        this.props.createPost(values,()=>{
            this.props.history.push("/")
        })
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className="text-xs-right">

                </div>
                <h3>New post</h3>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">
                    <Field
                        label="Title"
                        name="title"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        type="text"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        type="text"
                        name="content"
                        component={this.renderField}
                    />

                    <button type="submit" className="btn btn-primary">
                        Create new post
                    </button>
                    <Link className="btn btn-danger" type="button" style={{'float':'right'}} to="/">
                        Return to index
                    </Link>
                </form>




            </div>
        )
    }
}

function validate(values) {

    // this will be called everytime the form change.

    const errors = {};
    // vadiate input from values;   

    if (!values.title) {
        errors.title = "Enter a title";
    }


    if (!values.categories) {
        errors.categories = "Enter some categories";
    }


    if (!values.content) {
        errors.content = "Enter some content please";
    }



    // if errors is empty, form is fine to submit
    // if errors has any properties, redux form assumes form is invalid
    return errors
}

export default reduxForm({
    validate,
    form: "PostNewForm"
})((
    connect(null,{createPost})(PostNew)
))