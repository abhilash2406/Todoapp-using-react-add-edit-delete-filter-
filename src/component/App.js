import React from 'react';
import Header from './Header';
import ListItems from './ListItems';
import Footer from './Footer';
import Editbox from './EditBox';
class App extends React.Component {
  state = {
    showInputField: false,
    tags: [],
    filterSelected: 'All',
    editval: null,
  };

  onTagSubmit = (tag) => {
    this.setState({
      tags: [
        ...this.state.tags,
        {
          name: tag,
          selected: false,
        },
      ],
      showInputField: false,
    });
  };
  onCheckBoxChange = (checked, tag) => {
    console.log('<<<<<<checked & tag', checked, tag);
    this.setState({
      tags: this.state.tags.map((t) => {
        return {
          ...t,
          selected: t.name === tag ? checked : t.selected,
        };
      }),
    });
  };
  editfunc = (delvalue) => {
    this.setState({
      editval: delvalue,
    });
  };
  onEditSubmit = (val) => {
    console.log('delval', val);
    const originalvalue = this.state.editval;
    this.state.tags.map((item) => {
      console.log('itemexisting', item);
      if (originalvalue === item.name) {
        this.setState({
          tags: this.state.tags.map((t) => ({
            ...t,
            name: originalvalue === t.name ? val : t.name,
          })),
        });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="todoContainer">
          <h1 className="todoHeader">THINGS TO DO</h1>
          {this.state.editval ? (
            <Editbox editSubmit={this.onEditSubmit} edit={this.state.editval} />
          ) : null}
          {this.state.showInputField ? (
            <Header tagSubmit={this.onTagSubmit} />
          ) : null}
        </div>
        <ListItems
          delvalue={this.del}
          tags={this.state.tags}
          onCheckBoxChange={this.onCheckBoxChange}
          filterSelected={this.state.filterSelected}
          onDelete={(delval) =>
            this.setState({
              tags: this.state.tags.filter(({ name }) => name !== delval),
            })
          }
          // onEdit={(editval) => this.setState({ showInputField: true, })}
          onEdit={this.editfunc}
        />
        <Footer
          showHeader={() => this.setState({ showInputField: true })}
          isButtonDisabled={this.state.showInputField}
          filterSelected={this.state.filterSelected}
          onFilterSelect={(filter) => this.setState({ filterSelected: filter })}
          tagLimit={3}
          tagCount={this.state.tags.length}
        />
      </div>
    );
  }
}
export default App;
