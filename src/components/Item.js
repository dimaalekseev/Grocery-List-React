import React from 'react';

const Item = ({ item, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
      {!item.done ? (
        <p onClick={props.doneItem}>✔️</p>
      ) : (
        <p onClick={props.deleteItem}>❌</p>
      )}
    </div>
  );

  const className = 'item' + (item.done ? '-done p' : '');
  return (
    <div className={className}>
      <p>{item.title}</p>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Item;
