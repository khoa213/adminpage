import React, { useState, useEffect } from "react";
import { PrimaryLayout, AntLayout } from "components/Layout";
import { Space, Table, Tag, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import Excel from "components/Excel";
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add User
    </Button>
  );
};


const Users = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [])
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email;",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <Space size="middle">
            <Button type="primary" onClick={() => editUser(record.id)}>Edit</Button>
            <Button onClick={() => deleteUser(record.id)}>Delete</Button>
          </Space>
        );
      }
    }
  ];
  //const [dataTable, setDataTable] = useState(usersStore.listUser);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (user) => {
    // // Cach 2
    const newData = [...usersStore.listUser, {
      key: Math.floor(Math.random() * 10000) + 1,
      name: user.name,
      username: user.name,
      address: "afdasfgmdas;kfgmdal;kfm",

    }]
    dispatch.users.setListUser(newData);
  }
  const deleteUser = (id) => {
    const data = usersStore.listUser;
    const newData = data.filter(idNum => idNum.id !== id);
    dispatch.users.setListUser(newData);
    console.log('new data',newData);
  };
  const editUser = (id) => {
    const data = usersStore.listUser;
    const newData = data.map(item => {
      if (item.id === id) {
        return {
        ...item,
          name: "new name",
          username: "new username",
          address: "new address",
        };
      }
      return item;
    });
    dispatch.users.setListUser(newData);
    console.log('new data',newData);
  }
  return (

    <div className="About">
      <div className="about-section">
        <h1>Users management</h1>
        <Button type="primary" onClick={showModal}>
          Add users
        </Button>
        <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "User Id",
                  dataIndex: "id",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 20,
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  width: 50,
                },
              ],
              data: usersStore.listUser,
              tabName: "info",
            },
            {
              columns: [
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 30,
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  width: 30,
                },
              ],
              data: usersStore.listUser,
              tabName: "contact",
            },
          ]}
        >
          <Button>Export users</Button>

        </Excel>

        {/* <Input style={{width: 300, marginTop: '40px'}} onChange={(e) => setAfterDelete(e.target.value)}></Input> */}
        {/* <Input style={{ width: 300, marginTop: '40px' }} ></Input> */}
        {/* <Button onClick={Delete}>Delete</Button> */}
        {/* <Button onClick={Delete}>Delete</Button> */}
        <Modal
          open={open}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <SubmitButton form={form} />
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
        <Table columns={columns} dataSource={usersStore.listUser} ></Table>
      </div>
    </div>

  );
};

export default Users;
