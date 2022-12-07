import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';



const Address = () => {
  const { state } = useLocation();
  const { id } = useParams();


  console.log(state);
  return (

    <Col className='box' span={12}>
    <Typography.Text className='detail' >DETAIL ITEM</Typography.Text>
    <div>
      <div> 
        <div>
          <h1>{id}</h1>
          <h1>{state.form.title}</h1>
        </div>
        <div>
          <p>{state.form.description}</p>
        </div>
      </div>
    </div>

  </Col>

   
  );
};

export default Address;

