import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { URL_API } from '../../utils/common';

export const FormLogin = (props) => {
  const { setIsOpenFormLogin } = props;
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    const payload = {
      username: values.username,
      password: values.password,
    };
    axios.post(`${URL_API}/User/login`, payload)
      .then(res => {
        debugger
        if(res.data.success) {
          notification.success({
            message: 'Bạn đã đăng nhập thành công',
          });
          setIsOpenFormLogin(false);
        }else{
          notification.error({
            message: res.data.message
          });
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
