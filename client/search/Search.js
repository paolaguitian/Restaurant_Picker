import React from 'react';
import './Search.css'
import logo from '../logo.png'
import { Form, Input, Button } from 'antd';
import axios from 'axios';

/*
get current location option for location input
submit button styling
submit form  errors
*/
const Search = () => {

  const onFinish = (values) => {
    console.log(values, "make call to proxy")

    axios.get('/buisness', values)
      //proxy server sending the values injected into query
      // `
      //   query business {
      //     query business(id: "values.location") {
      //       values.name
      //     }
      //   }
      .then(res => {
        console.log(res, "then")
      }).catch(console.log("fail"))
  }

  const getLocation = () => {
    console.log('location')
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
                <Input style={{ width: '50%' }} placeholder="33130, Miami Beach, San Francisco..." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Button className="login-form-button" htmlType="submit">
            Submit
        </Button>
        </Form>
      </div>
    </div >
  )
}
export default Search;