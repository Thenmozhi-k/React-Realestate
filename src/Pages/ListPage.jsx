import React from 'react';
import listdata from '../Lib/DataSet';
import { Element } from 'react-scroll';
import Map from '../Components/Map';
import Filter from '../Components/Filter';
import Card from '../Components/Card';
import ErrorBoundary from '../Components/ErrorBoundary';

const ListPage = () => {
  return (
    <ErrorBoundary>
      <div className='container flex flex-col lg:flex-row w-full mt-32'>
        {/* List Container */}
        <div className='listcontainer scrollbar-hide w-full lg:w-7/12 pr-0 lg:pr-4 h-[calc(100vh-8rem)] lg:h-screen overflow-y-scroll'>
          <Element name="listcontainer">
            <div className="wrapper">
              <Filter />
              {listdata.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </Element>
        </div>

        {/* Map Container */}
        <div className="mapcontainer md:mr-4 lg:mr-40 lg:w-4/12 w-full h-96 lg:h-[calc(100vh-8rem)] mt-4 lg:mt-0 lg:fixed top-32 lg:right-0">
          <Map items={listdata} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default ListPage;
