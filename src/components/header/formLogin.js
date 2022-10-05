import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import React from 'react';
import { URL_API } from '../../utils/common';

export const FormLogin = (props) => {
  const { setIsOpenFormLogin } = props;
  const onFinish = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    axios.post(`${URL_API}/User/login`, payload)
      .then(res => {
        if(res.success) {
          notification.open({
            message: 'Bạn đã đăng nhập thành công',
          });
          setIsOpenFormLogin(false);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
