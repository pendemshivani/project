import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

function Login() {
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };

    return (
        <div style={{ 
            backgroundColor: "#023e42", 
            height: "100vh", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" 
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: "400px",
            }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h1 style={{ fontSize: "24px", margin: 0 }}>PAYMENT WALLET - LOGIN</h1>
                </div>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                            backgroundColor: "#004d4e",
                            color: "#fff",
                            border: "none",
                            padding: "10px",
                            fontSize: "16px",
                            fontWeight: "bold",
                        }}
                    >
                        LOGIN
                    </Button>
                </Form>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <a href="/register" style={{ color: "#004d4e", textDecoration: "underline" }}>
                        Not a member? Click Here To Register
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
