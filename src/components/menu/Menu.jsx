import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../redux/features/Products/productSlice'


const MainMenu = () => {
  const [current, setCurrent] = useState('');
  const select = useSelector(selectCategory);

  const items = [  
    {  
        key: 'sub1',  
        label: 'دسته بندی محصولات',  
        icon: <MenuOutlined style={{ color: 'white' }} />,  
        children: select.map(child => ({  
            key: child.id,  
            label: <NavLink to={`/category/${child.category}`}>{child.name}</NavLink>,
            children: child.relatedProducts?.map(item => ({  
                key: item.id,  
                label: <NavLink to={`/category/${child.category}/${item.name}`}>{item.name}</NavLink>, 
            }))  
        }))  
    }  
];  

  const onClick = (e) => {
    setCurrent(e.key);    
  };
 

  // const isLightMode = localStorage.getItem('theme') === 'light';

  return (
    <>
      <Menu
        // theme={isLightMode ? 'light' : 'dark'}
        onClick={onClick}
        style={{
          width: 210,
          maxHeight: 300,
          overflowY: 'auto',
          border: 'none',
          zIndex: 9999,
          borderRadius: '0.5rem',
          backgroundColor: '#F9F9F9', 
          // position: 'absolute',
          // top: '-16px',
          // right: '0',
          userSelect:'none',
        }}
        defaultOpenKeys={['']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default MainMenu;