import { Col, Form, Row } from "antd"; // Ant Design imports
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    // Form submission handler
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded shadow-md w-3/4 max-w-4xl">
                <h1 className="text-2xl font-bold text-center mb-4">PAYMENTWALLET - REGISTER</h1>
                <p
                    className="text-sm text-center text-blue-600 underline cursor-pointer mb-6"
                    onClick={() => navigate('/login')}
                >
                    Already a member? Log in
                </p>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    className="space-y-6"
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Please enter your first name' }]}
                            >
                                <input type="text" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Please enter your last name' }]}
                            >
                                <input type="text" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Enter a valid email address' },
                                ]}
                            >
                                <input type="email" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Mobile"
                                name="mobilenumber"
                                rules={[{ required: true, message: 'Please enter your mobile number' }]}
                            >
                                <input type="text" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Identification Type"
                                name="identificationType"
                                rules={[{ required: true, message: 'Please select an identification type' }]}
                            >
                                <select className="form-select">
                                    <option value="NATIONAL ID">National ID</option>
                                    <option value="PASSPORT">Passport</option>
                                    <option value="DRIVING LICENSE">Driving License</option>
                                    <option value="SOCIAL CARD">Social Security Card (SSN)</option>
                                </select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Identification Number"
                                name="identificationNumber"
                                rules={[{ required: true, message: 'Please enter your identification number' }]}
                            >
                                <input type="text" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                                <input type="text" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    { required: true, message: 'Please enter your password' },
                                    { min: 6, message: 'Password must be at least 6 characters long' },
                                ]}
                            >
                                <input type="password" className="form-input" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match'));
                                        },
                                    }),
                                ]}
                            >
                                <input type="password" className="form-input" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="flex justify-end">
                        <button type="submit" className="primary-contained-btn">
                            Register
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
