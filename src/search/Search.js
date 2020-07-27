import React from 'react';
import './Search.css'
import logo from '../logo.png'
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { API_KEY } from '../../.env';

/*
get current location option for location input
submit button styling
submit form  errors
*/
const Search = () => {

  //CORS NOT SUPPORTED ON GQL AND REST ENDPOINT.. to use JSONP
  const onFinish = (values) => {
    axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        term: values.food,
        location: values.location
      }
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
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