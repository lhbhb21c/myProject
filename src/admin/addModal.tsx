import React, { Component } from 'react';
import {Form} from 'antd';
class addModal extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state ={


        }
    }

    render(){

        return(
<div>          
<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        <Form.Item label="Name">
            <input />
        </Form.Item>
      </Form>
      </div>       
        );
    }
}

export default addModal;