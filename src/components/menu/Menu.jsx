import React, { useState } from 'react';  
import { MenuOutlined } from '@ant-design/icons';  
import { Menu } from 'antd';  
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import {selectCategory} from'../../redux/features/Products/productSlice'
  

const MainMenu = () => {  
  const [current, setCurrent] = useState('1');  
  const select=useSelector(selectCategory)
  
  const items = [  
  {  
    key: 'sub1',  
    label: 'دسته بندی محصولات',  
    icon: <MenuOutlined style={{ color: 'white' }} />,  // رنگ ایکون به سفید تغییر کرد  
    children:select.map(child=>({
      key:child.id,
      label:child.name,
      children:child.relatedProducts?.map(item=>({
        key:item.id,
        label:item.name,
      }))
    }))  
  }  
];
 

  const activeLinkStyle = {  
    fontWeight: 'bold',  
    color: 'blue',
};
  const onClick = (e) => {  
    setCurrent(e.key);  
  };  

  const isLightMode = localStorage.getItem('theme') === 'light';  

  return (  
    <>  
      <Menu  
        theme={isLightMode ? 'light' : 'dark'}  
        onClick={onClick}  
        className='scrollbar'
        style={{  
          width: 256,  
          maxHeight: 300,
          overflowY:'auto',
          border: 'none',  
          zIndex: 9999,  
          borderRadius: '0.5rem',  
          // backgroundColor: isLightMode ? '#FF5023' : 'black', // رنگ پس‌زمینه  
          position:'absolute',
          top:'-24px',
          right:'0'
        }}  
        defaultOpenKeys={['']}  
        selectedKeys={[current]}  
        mode="inline"  
        items={items.map(item => ({  
          ...item,  
          label: (  
            <NavLink activeStyle={activeLinkStyle} > {/* رنگ متن والد */}  
              {item.label}  
            </NavLink>  
          ),  
          children: item.children?.map(child => ({  
            ...child,  
            label: (  
              <NavLink activeStyle={activeLinkStyle} > {/* رنگ متن برای زیر گزینه‌ها */}  
                {child.label}  
              </NavLink>  
            )  
          })),  
        }))}  
      />  
    </>  
  );  
};  

export default MainMenu;