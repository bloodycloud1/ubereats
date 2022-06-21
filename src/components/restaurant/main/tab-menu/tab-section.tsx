import React, { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';
import { Tab } from '@mui/material';
import TabPanel from './tab-panel';
import TabDishCard from './tab-dish-card';
import TabsDishType from './tabs-dish-type';
import TabTitle from './tab-title';
import { useOpenModal } from '../../../hooks/useOpenModal';

const TabSection: FC<RestaurantType> = ({ menu }) => {
  const [value, setValue] = React.useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="container mx-auto mb-20">
      <TabsDishType value={value} handleChange={onChange}>
        {menu.map((item, index) => {
          return <Tab label={item.name} key={index} />;
        })}
      </TabsDishType>
      {menu.map((item, index) => {
        return (
          <TabTitle value={value} index={index} key={index}>
            {item.name}
          </TabTitle>
        );
      })}
      {menu.map((item, index) => {
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
