import React from 'react';

class Editbox extends React.Component {
  state = {
    tagValue: this.props.edit,
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.tagValue !== '') {
      this.props.editSubmit(this.state.tagValue);
    } else {
      alert('value cannot be empty');
    }
  };
  render() {
    console.log('this.props.edit', this.props.edit);
    console.log('this.state.tagvalue', this.state.tagValue);
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="inputField">
          <input
            type="text"
            placeholder="Edit"
            value={this.state.tagValue}
            onChange={(e) => this.setState({ tagValue: e.target.value })}
          />
        </div>
      </form>
    );
  }
}
export default Editbox;
