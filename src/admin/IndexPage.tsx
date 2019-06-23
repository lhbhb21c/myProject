import React, { Component } from 'react';
import {Table, Layout, Menu, Icon, Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import addModal from './addModal';
import './IndexPage.css';
import PostData from './PostData.json'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class IndexPage extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state ={
            chartList : PostData,
            collapsed: false,
            selectedRows : [],
            selectedRowKeys : [],
            visible : false
        }
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    }

    add(){
      this.setState({
        visible:true
      })
    };
    delete(){
      console.log("test");
    };

    handleOk = () =>{
      this.setState({
        visible : false
      })
    }

    handleCancel = () =>{
      this.setState({
        visible : false
      })
    }
    onCollapse = (collapsed : any) => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
render(){
    
    const content : any = (
        <div>
            <p> ID : donghyun.ko </p>
            <p> 권한 : 관리자 </p>
        </div>
    );


    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '12%',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: '30%',
        key: 'address',
      },
    ];
    

    const rowSelection = {
      onChange: (selectedRowKeys:any, selectedRows:any) => {
        this.setState({
          selectedRows : selectedRows,
          selectedRowKeys : selectedRowKeys
        })
      }
    };
    
    return (
<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User Management</span>
                </span>
              }
            >
              <Menu.Item key="3">ADMIN</Menu.Item>
              <Menu.Item key="4">USER</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div>바꿔보자</div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <h3>Test Table</h3>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              
            <Table columns={columns} rowSelection={rowSelection} dataSource={this.state.chartList} />
            <Button type="primary" block onClick={this.add}>Add</Button>
            <Modal title="Table Test Add" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>

              <addModal/>
              </Modal>
            <Button type="danger" block onClick={this.delete}>Delete</Button>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default IndexPage;
