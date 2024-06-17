import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {Link} from 'react-router-dom';

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div>
         <img src={item.img} alt="" />
         <div>
          <Link to={`/${item.id}`}>{item.title}</Link>
          <p>{item.bedrooms} Bedrooms</p>
         </div>
          
          
          <p>Price: ${item.price.toLocaleString()}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
