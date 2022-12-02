import React from 'react';

class Header extends React.Component {
  state = {
    tagValue: '',
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('>>>>>>>>>>>', this.state.tagValue);
    if (this.state.tagValue !== '') {
      this.props.tagSubmit(this.state.tagValue);
    } else {
      alert('value cannot be empty');
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="inputField">
          <input
            type="text"
            placeholder="Add New"
            value={this.state.tagValue}
            onChange={(e) => this.setState({ tagValue: e.target.value })}
          />
        </div>
      </form>
    );
  }
}
export default Header;
