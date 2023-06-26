import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      className: 'column-money',
      dataIndex: 'price',
      align: 'right',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text) => <img src={text}/>,
    },
  ];
  
  const data = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  console.log('product',data);
  
const TableProduct = () => {
  // const usersStore = useSelector((state) => state.product);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch.product.fetchProducts();
  // }, [dispatch]);
    return <div>
    <Table
    columns={columns}
    // dataSource={usersStore.product}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
  </div>
};
export default TableProduct;