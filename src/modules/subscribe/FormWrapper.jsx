import React from 'react';
import { Form, Input, Icon, Select, Button } from 'antd';
import { sendEmail } from './services/sendEmail';

const { Option } = Select;

const SubscribeForm = props => {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, formData) => {
            if (!err) {
                sendEmail(formData);
            }
        });
    };

    const { getFieldDecorator } = props.form;
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item label="Imię i nazwisko" style={{ width: '75%' }}>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Wpisz swoje imię i nazwisko' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Wpisz swoje imię i nazwisko"
                    />,
                )}
            </Form.Item>
            <Form.Item label="E-mail" style={{ width: '75%' }}>
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'Podaj poprawny adres e-mail',
                        },
                        {
                            required: true,
                            message: 'Podaj adres e-mail',
                        },
                    ],
                })(
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Podaj poprawny adres e-mail"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Imię dziecka" style={{ width: '75%' }}>
                {getFieldDecorator('childName', {
                    rules: [{ required: true, message: 'Wpisz imię dziecka' }],
                })(
                    <Input
                        prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Wpisz imię dziecka"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Wiek dziecka" style={{ width: '75%' }}>
                {getFieldDecorator('childAge', {
                    rules: [{ required: true, message: 'Wybierz wiek dziecka' }],
                })(
                    <Select
                        // onChange={handleSelectChange}
                        placeholder="Wybierz wiek dziecka"
                        style={{ width: '50%' }}
                    >
                        <Option value="2,5">2,5</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="Wiadomość" style={{ width: '75%' }}>
                {getFieldDecorator('message', {
                    rules: [{ required: true, message: 'Wpisz treść wiadomości' }],
                })(<Input.TextArea placeholder="..." autosize={{ minRows: 3, maxRows: 8 }} />)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Wyślij
                </Button>
            </Form.Item>
        </Form>
    );
};

export const FormContainer = Form.create({ name: 'subscribe_kid' })(SubscribeForm);
