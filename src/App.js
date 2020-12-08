import React from 'react';
import Item from './components/Item';
import AddItem from './components/AddItem'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        { id: 0, title: 'Mango', done: false },
        { id: 1, title: 'Soap', done: true },
        { id: 2, title: 'Vegetables', done: false },
      ],
    };
  }

  addItem = item =>{
    this.setState(state=>{
      let {items} = state;
      items.push({
        id:items.length !== 0 ? item.length : 0,
        title:item,
        done:false
      });
      return items;
    })
  }
  doneItem = (id) => {
    const index = this.state.items.map((item) => item.id).indexOf(id);
    this.setState((state) => {
      let { items } = state;
      items[index].done = true;
      return items;
    });
  };

  deleteItem = (id) =>{
    const index = this.state.items.map(item=>item.id).indexOf(id);
    this.setState(state=>{
      let{items}=state;
      delete items[index];
      return items;
    })
  }
  render() {
    const { items } = this.state;
    const activeItems = items.filter((item) => !item.done);
    const doneItems = items.filter((item) => item.done);

    return (
      <div className="App">
        <h1 className="top">Grocery List: {activeItems.length} items</h1>
        {[...activeItems, ...doneItems].map((item) => (
          <Item
            doneItem={() => this.doneItem(item.id)}
            deleteItem={() => this.deleteItem(item.id)}
            item={item}
            key={item.id}></Item>
        ))}
        <AddItem addItem={this.addItem}></AddItem>
      </div>
    );
  }
}

export default App;
