import { useState } from "react";

interface Props {
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {item.length === 0 && <p>No cities found!!!</p>}
        {/* if first expression true then print 2nd expression */}
        {item.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
