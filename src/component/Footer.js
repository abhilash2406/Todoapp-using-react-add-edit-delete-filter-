import React from 'react';

class Footer extends React.Component {
  tagLimit;
  tagCount;

  render() {
    if (this.props.tagCount === this.props.tagLimit) {
    }
    return (
      <div className="footer">
        <div className="footerLeft">
          {this.props.tagCount === this.props.tagLimit ? null : (
            <button
              onClick={this.props.showHeader}
              disabled={this.props.isButtonDisabled}
            >
              Add
            </button>
          )}
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span> {this.props.tagLimit - this.props.tagCount} items left</span>
        </div>
        <div className="footerRight">
          <input
            type="button"
            value="All"
            className={this.props.filterSelected === 'All' ? 'active' : ''}
            onClick={() => this.props.onFilterSelect('All')}
            disabled={this.props.filterSelected === 'All'}
          />
          <input
            type="button"
            value="Active"
            className={this.props.filterSelected === 'Active' ? 'active' : ''}
            onClick={() => this.props.onFilterSelect('Active')}
            disabled={this.props.filterSelected === 'Active'}
          />
          <input
            type="button"
            value="completed"
            className={
              this.props.filterSelected === 'completed' ? 'active' : ''
            }
            onClick={() => this.props.onFilterSelect('completed')}
            disabled={this.props.filterSelected === 'completed'}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
