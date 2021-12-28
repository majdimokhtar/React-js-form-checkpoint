import React from 'react'
import Dashboard from './Dashboard'
import {Form,Input,Radio,Select,Button, DatePicker} from 'antd'

function Forms() {

    function submitform(values){ console.log(values)}
    return (
        <div>
            <Dashboard>
                <div>
                    <h3>Forms of validation</h3>
                    <Form layout="vertical" className='p-2 form' onFinish={submitform}>
                   <Form.Item label="First Name" name='firstName' required rules={[{required:true, min:2}]}>
                   <Input/>
                   </Form.Item>
                   <Form.Item label="Last Name" name='lastName' required rules={[{required:true, min:2}]}>
                   <Input/>
                   </Form.Item>
                   <Form.Item label="Email" name='Email' required rules={[{required:true, type:'email'}]}>
                   <Input/>
                   </Form.Item>
            <Form.Item label="Gender" name='gender' required rules={[{required:true}]}>

                <Radio.Group>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>

                </Radio.Group>
                </Form.Item>
                <Form.Item label="Date of birth" name='dob' required rules={[{required:true}]}>
                   <DatePicker/>
                   </Form.Item>


                   <Form.Item label="Department" name='department' required rules={[{required:true}]}>

                <Select>
                    <Radio value='computers'>Computers</Radio>
                    <Radio value='electrical'>Electrical</Radio>
                    <Radio value='civil'>Civil</Radio>
                    <Radio value='Aeronautical'>Aeronautical</Radio>
                    <Radio value='mecanical'>Mecanical</Radio>


                </Select>
                </Form.Item>

                <Form.Item label="Adress" name='adress' required rules={[{required:true,min:10}]}>
                   <textarea style={{width: '100%'}}/>
                   </Form.Item>
<Button htmlType='ubmit' type='primary'>Register</Button>



                    </Form>
                        
                        </div>
            </Dashboard>
        </div>
    )
}

export default Forms
