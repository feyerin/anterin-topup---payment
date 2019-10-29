import React, { Component } from "react";
import { Button, Tabs, Divider,Carousel, Cascader} from 'antd';
import TextField from '@material-ui/core/TextField';


const { TabPane } = Tabs;
const options = [
    {
      value: 'November 2019',
      label: 'November 2019',
    },
    {
      value: 'Desember 2019',
      label: 'Desember 2019',
    },
  ];

export default class BPJS extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
        };
      }
    
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };

    callback(key) {
        console.log(key);
    }

    render(){
        return(
            <div className="body">
                <div className="section-content">
                    <Carousel autoplay>
                        <div>
                        <h3>1</h3>
                        </div>
                        <div>
                        <h3>2</h3>
                        </div>
                        <div>
                        <h3>3</h3>
                        </div>
                        <div>
                        <h3>4</h3>
                        </div>
                    </Carousel>
                    <Divider/>
                    <h2 style={{display:"inline", marginBottom:"15%"}}>Bayar BPJS kesehatan dan ketenagakerjaan kamu di</h2><h2 className="Anterin-text"> Anterin</h2>
                    <p style={{paddingTop:'5%'}}>Jenis BPJS :</p>
                    
                    <Tabs defaultActiveKey="1">
                        
                        <TabPane tab="Kesehatan" key="1">
                            <TextField style={{ minWidth:'100%'}}
                                id="standard-name"
                                label="nomor virtual account keluarga"
                                margin="normal"/>

                            <p style={{paddingTop:'5%'}}>Bayar untuk :</p>
                            <Cascader size="large" style={{width:'100%'}} options={options} onChange={this.onCascaderChange} />
                        </TabPane>

                        <TabPane tab="Ketenagakerjaan" key="2">
                            <TextField style={{ minWidth:'100%'}}
                                id="standard-name"
                                label="nomor KTP"
                                margin="normal"/>

                            <p style={{paddingTop:'5%'}}>Bayar untuk :</p>
                            <Cascader size="large" style={{width:'100%'}} options={options} onChange={this.onCascaderChange} />    
                        </TabPane>
                    </Tabs>

                    <br></br>
                    <br></br>
                    <br></br>

                    <p style={{display:"inline"}}>Total :</p>
                    <h3>Rp. {this.state.value}.000</h3>
                    <Button 
                        type="primary"
                        style={{ minWidth:'100%', background: '#17bad1'}} 
                        className="">
                        Beli
                    </Button>
                    <Divider></Divider>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3 style={{textAlign:'center', color:'#17bad1'}}>Bayar Iuran BPJS Kesehatan Online Semakin Mudah dan Ringan di Anterin</h3>
                    <br></br>
                    <br></br>

                    <div className="section-content section-blue">
                    <p style={{textAlign:"center"}}>Section 1</p>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. 
                        Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. 
                        Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. 
                        Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. 
                        Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. 
                        Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. 
                        Netus et malesuada fames ac turpis egestas integer eget aliquet. 
                        Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
                        Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. 
                        Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. 
                        Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. 
                        Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. 
                        Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.
                        ellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.
                        Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus.
                        Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel.`;</p>
                    </div>

                    <div className="section-content section-white">
                    <h1>section 2</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. 
                        Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. 
                        Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. 
                        Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. 
                        Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. 
                        Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. 
                        Netus et malesuada fames ac turpis egestas integer eget aliquet. 
                        Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
                        Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. 
                        Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. 
                        Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. 
                        Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. 
                        Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.</p>
                    </div>

                </div>
            </div>

                    
        )
    }
}