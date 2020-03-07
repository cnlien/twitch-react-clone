import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Button } from 'reactstrap';

// STYLES
import './streams.scss';

class StreamCreate extends React.Component {

  renderError ({ error, touched }) {
    if (touched && error) {
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  
  renderInput = ({ input, label, meta }) => {
    const className = `create-input ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div>
        <div className="create-error">{ this.renderError(meta) }</div>
        <Input {...input} placeholder={label} className={className} autoComplete="off"/>
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues)
  }

  render() {
    return(
      <Container>
      <h1>Create a Stream</h1>
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={ this.renderInput }
          label="Enter Title"
        />
        <Field
          name="description"
          component={ this.renderInput }
          label="Enter Description"
        />
        <Button> Submit </Button>
      </form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors={};
  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }
  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);