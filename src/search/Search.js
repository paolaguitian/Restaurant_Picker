import React from 'react';
import './Search.css'
import logo from '../logo.png'
import { Form, Input, Button } from 'antd';

/*
get current location option for location input
submit button styling
submit form  errors
*/
const Search = () => {

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="search-container">
      <div className="title">
        <img className="icon" src={logo} />
        IT 4 ME
      </div>
      <div className="form">
        <Form onFinish={onFinish}>
          <Form.Item>
            <Input.Group size="large" compact>
              <Form.Item
                name={['food']}
                noStyle
              >
                <Input style={{ width: '50%' }} placeholder="burgers,thai,tacos,american..." />
              </Form.Item>
              <Form.Item
                name={['location']}
                noStyle
              >
                <Input style={{ width: '50%' }} placeholder="Input street" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Button className="submit" type="primary" htmlType="submit">
            Submit
        </Button>
        </Form>
      </div>
    </div >
  )
}
export default Search;