import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import { rules } from '../utils/rules';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm:FC = () => {
    const { login } = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const submit = () => {
        login(username, password)
    }

    return (
        <Form onFinish={submit}>
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйства введите имя пользователя!') ]}
            >
                <Input
                    value={username}
                    onChange={e => SetUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйства введите пароль!') ]}
            >
                <Input.Password
                    value={password}
                    onChange={e => SetPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default LoginForm;