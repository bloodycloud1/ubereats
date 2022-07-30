import React, { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';
import { Tab } from '@mui/material';
import TabPanel from './tab-panel';
import TabDishCard from './tab-dish-card';
import TabsDishType from './tabs-dish-type';
import TabTitle from './tab-title';
import { useOrders } from '../../../../hooks/useOrders';

const TabSection: FC<RestaurantType> = ({ menu }: any) => {
  const [value, setValue] = React.useState(0);
  const order = useOrders();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    e.preventDefault();
    setValue(newValue);
  };
  
  return (
    <div className="container mx-auto mb-20">
      <TabsDishType value={value} handleChange={onChange}>
        {menu.map((item: any, index: any) => {
          return <Tab label={item.name} key={index} />;
        })}
      </TabsDishType>
      {menu.map((item: any, index: any) => {
        return <TabTitle value={value} index={index} key={index} title={item.name} />;
      })}
      {menu.map((item: any, index: any) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {item.dishlist.map((item: any, index: any) => {
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
