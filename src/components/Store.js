import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './phone.scss';

class Store extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <span>Store</span>
          <div className="icons-list">
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    );
  }
}
export default Store;
