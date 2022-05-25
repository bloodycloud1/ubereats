import React, { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';
import { Tab } from '@mui/material';
import TabPanel from './tab-panel';
import TabDishCard from './tab-dish-card';
import TabsDishType from './tabs-dish-type';

const TabSection: FC<RestaurantType> = (props) => {
  const restaurant = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="container mx-auto">
      <TabsDishType value={value} handleChange={handleChange}>
        {restaurant.menu.map((item: any, index: any) => {
          return <Tab label={item.name} key={index} />;
        })}
      </TabsDishType>
      {restaurant.menu.map((item, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {item.dishlist.map((item, index) => {
              const { dishname, discription, price, imgUrl } = item;
              return <TabDishCard dishname={dishname} discription={discription} price={price} imgUrl={imgUrl} key={index} />;
            })}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default TabSection;
