// src/Components/List.jsx
import React from 'react';
import listdata from '../Lib/DataSet';
import Card from '../Components/Card'; 

const List = () => {
  return (
    <div>
      {listdata.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
