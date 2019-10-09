import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        ) // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    if (!formValues.title) {
        
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

