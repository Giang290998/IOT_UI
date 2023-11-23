/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Table,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Spinner
} from "reactstrap";

function UserProfile(args) {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);

    const position = ["Giám Đốc", "Quản lý", "Nhân viên"];
    const staffs = [
        {
            name:"Đoàn Thị Hồng Hạnh",
            phone: "0326118999",
            level: 1
        },
        {
            name:"Đoàn Thị Mi Mi",
            phone: "0326118888",
            level: 2
        },
        {
            name:"Đoàn Thị Meo Meo",
            phone: "0326118777",
            level: 2
        }
    ];
  return (
    <>
      <div className="content">
        <Row>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Interact
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffs.map((staff, index) => {
                            return (
                            <tr>
                                <th scope="row">
                                    {index+1}
                                </th>
                                <td>
                                    {staff.name}
                                </td>
                                <td>
                                    {staff.phone}
                                </td>
                                <td>
                                    {position[staff.level]}
                                </td>
                                <UncontrolledDropdown
                                    className="me-2"
                                    direction="down"
                                >
                                    <DropdownToggle
                                    caret
                                    color="info"
                                    >
                                        <i class="fa-solid fa-pen"></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem>
                                        <div style={{display: 'flex'}}>
                                            <i class="fa-solid fa-arrow-up" style={{color: 'blue', fontSize: '20px', paddingRight:'2px'}}></i>
                                            <p style={{color:'black', fontSize: '16px'}}>Tăng 1 cấp</p>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div style={{display: 'flex'}}>
                                            <i class="fa-solid fa-arrow-down" style={{color: 'orange', fontSize: '20px', paddingRight:'2px'}}></i>
                                            <p style={{color:'black', fontSize: '16px'}}>Giảm 1 cấp</p>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <div style={{display: 'flex'}}>
                                            <i class="fa-solid fa-circle-xmark" style={{color: 'red', fontSize: '20px', paddingTop:'1px'}}></i>
                                            <p style={{color:'black', fontSize: '16px'}}>Thôi việc</p>
                                        </div>
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Row>
        <Row>
            <Col lg="12" style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                {/* <Button
                    color="primary"
                >
                    Thêm nhân viên
                </Button> */}
                <div>
                    <Button color="primary" onClick={toggle}>
                        Thêm nhân viên
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>
                            <p style={{fontSize:'20px', color:'black'}}>Thêm nhân viên</p>
                        </ModalHeader>
                        <ModalBody>
                            <Label for="examplePassword">
                                Nhập số điện thoại hoặc email
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Phone or email"
                                type="text"
                                color="black"
                            />
                            <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                <Button color="primary" onClick={toggle}>
                                    Tìm kiếm
                                </Button>
                            </div>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{display: 'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', fontWeight:'500', paddingLeft:'10px'}}>
                                    Đoàn Thị Hồng Hạnh
                                </p>
                                <Button color="primary" onClick={toggle}>
                                    <i class="fa-solid fa-circle-plus" 
                                        style={{display: 'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}
                                    ></i>
                                </Button>
                            </div>
                                
                        </ModalBody>
                        <ModalFooter>
                            {/* <div style={{display: 'flex', alignItems:'center',  justifyContent:"center"}}>
                                <Button color="secondary" onClick={toggle}>
                                    Cancel
                                </Button>
                            </div> */}
                        </ModalFooter>
                    </Modal>
                </div>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
