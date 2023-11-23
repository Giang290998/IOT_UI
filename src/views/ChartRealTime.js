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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Switch from "react-switch";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  Form,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import signalRService from "helper/signalR";

function ChartRealTime(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [state, setState] = React.useState(true);

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

//   setTimeout(() => {signalRService.sendTestMessage("Giang cu toooo.");}, 1)
  

  return (
    <>
      <div className="content">
        <Row >
            <Col lg='9'>
                <Row>
                    <Col lg="6">
                        <Card className="card-chart">
                        <CardHeader>
                            <h5 className="card-category">Nhiệt độ</h5>
                            <CardTitle tag="h3">
                            {/* <i className="tim-icons icon-bell-55 text-info" /> 763,215 */}
                            <i class="fa-solid fa-temperature-three-quarters text-info" /> 28 °C   
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                            <Line
                                data={chartExample2.data}
                                options={chartExample2.options}
                            />
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-chart">
                        <CardHeader>
                            <h5 className="card-category">pH</h5>
                            <CardTitle tag="h3">
                            {/* <i className="tim-icons icon-delivery-fast text-primary" />{" "} */}
                            <i class="fa-solid fa-wand-magic-sparkles text-primary" />{" "}
                            7.1
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                            <Bar
                                data={chartExample3.data}
                                options={chartExample3.options}
                            />
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <Card className="card-chart">
                        <CardHeader>
                            <h5 className="card-category">Nồng độ chất tan</h5>
                            <CardTitle tag="h3">
                            {/* <i className="tim-icons icon-send text-success" /> 12,100K */}
                            <i class="fa-solid fa-flask-vial text-success" /> 999 ppm
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                            <Line
                                data={chartExample4.data}
                                options={chartExample4.options}
                            />
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-chart">
                        <CardHeader>
                            <h5 className="card-category">Mực nước bồn</h5>
                            <CardTitle tag="h3">
                            {/* <i className="tim-icons icon-send text-success" /> 12,100K */}
                            <i class="fa-solid fa-droplet text-info" /> 50 % (99 lít)
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                            <Line
                                data={chartExample4.data}
                                options={chartExample4.options}
                            />
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>            
            <Col lg="3">
                <Form>
                    <p style={{fontSize:'20px', fontWeight:'600',display: 'flex', alignItems:'center', justifyContent:'center'}}>MODE : {state ? 'AUTO' : 'MANUAL'}</p>
                    <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <FormGroup switch>
                            <Switch onChange={() => setState(!state)} checked={state}
                                checkedIcon={<i class="fa-solid fa-robot fa-shake" style={{fontSize: '18px', marginLeft: '4px', marginTop:'4px', color:'white'}}></i>}
                                uncheckedIcon={<i class="fa-solid fa-hand" style={{fontSize: '20px', marginLeft: '4px', marginTop:'4px', color:'white'}}></i>}
                                disabled={false}
                            />
                        </FormGroup>
                    </div>
                    {
                        !state
                        ?
                        <>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Nồng độ chất tan
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="ppm"
                                type="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                            pH
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="pH"
                                type="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="water">
                            Mực nước bồn chứa
                            </Label>
                            <Input
                                id="water"
                                name="water"
                                placeholder="%"
                                type="number"
                            />
                        </FormGroup>
                        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                            <Button
                                color="primary"
                            >
                                Xác nhận
                            </Button>
                        </div>
                        {/* <FormGroup>
                            <Label for="examplePassword">
                            OTP
                            </Label>
                            <Input
                                id="otp"
                                name="otp"
                                placeholder="Nhập OTP gửi qua tin nhắn."
                                type="number"
                            />
                        </FormGroup>
                        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                            <Button
                                color="primary"
                            >
                                Xác nhận
                            </Button>
                        </div> */}
                    </> 
                    :
                    <div></div>
                    }
                    
                </Form>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default ChartRealTime;
