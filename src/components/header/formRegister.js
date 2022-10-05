import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { URL_API } from '../../utils/common';

export const FormRegister = () => {
  const onFinish = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
      role: "Normal"
    }
    axios.post(`${URL_API}/User/register-user`, payload)
      .then(res => {
        // register success
      })
      .catch(error => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder='Vui lòng nhập username' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Vui lòng nhập password' />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
