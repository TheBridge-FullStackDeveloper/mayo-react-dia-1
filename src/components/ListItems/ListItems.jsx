const ListItems = (props) => {
  const listItems = props.listItems.map((number) => <li>{number}</li>);

  return <ul>{listItems}</ul>;
};

export default ListItems;
