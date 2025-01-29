import React, { useEffect, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, } from 'antd';

const items = [
  {
    key: 'sub1',
    label: 'دسته بندی محصولات',
    icon: <MenuOutlined />,
    children: [
      {
        key: '1',
        label: 'Option 1',
      },
      {
        key: '2',
        label: 'Option 2',
        children: [ // Adding a child to Option 2  
          {
            key: '2-1',
            label: 'Sub Option 1',
          },
          {
            key: '2-2',
            label: 'Sub Option 2',
          },
        ],
      },
      {
        key: '3',
        label: 'Option 3',
      },
      {
        key: '4',
        label: 'Option 4',
      },
    ],
  }
];
const MainMenu = () => {
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    setCurrent(e.key);
  };


  return (
    <>
      <Menu
        theme={localStorage.getItem('theme') == 'light' ? 'dark' : 'light'}
        onClick={onClick}
        style={{
          width: 256,
          position: 'absolute',
          top: 0,
          right: 0,
          border: 'none',
          zIndex: 9999,
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