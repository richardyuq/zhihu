/**
 * Class Register
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List,Toast,Modal } from 'antd-mobile';

import util from '../common/util.js';
import './register.css';

let Main = React.createClass({
	
	getInitialState() {
		return {
			dialogShow: false
		};
	},
	
	changeCode() {
		return (event) => {
			event.target.src = "http://112.74.50.192/FHADMINM/code.do?t=" + new Date().getTime();
		};
	},
	
	onClose() {
		this.setState({
			dialogShow: false
		});
	},
	
	register() {
		return (event) => {
			util.ajax({
				url: '/FHADMINM/app/yuewen/member/register.do',
				data: {
					'USERNAME': document.getElementById("loginName").value,
					'PASSWORD': document.getElementById("passWord").value,
				},
				cb: (res) => {
					Toast.success('注册成功');
					window.location = '/login.html';
				}
			});
		};
	},
	
	onPortrait() {
		return (event) => {
			this.setState({
				dialogShow: true
			});
		};
	},
	
	render() {
		const codeImg = "http://112.74.50.192/FHADMINM/code.do?t=" + new Date().getTime();
		
		return (
			<div>
				<div style={{height:'8'}}></div>
				<div className="bg">
			    	<div className="login-box">
			    		<div className="title">账号注册</div>
			    		<div className="area">
			    			<input id="loginName" type="text" placeholder="login Name (Email)"/>
			    			<a onClick={this.onPortrait()} className="portrait">选择头像</a>
			    			<input id="passWord" type="password" placeholder="Password"/>
			    			<input id="passWord2" type="password" placeholder="Repeat Password"/>
			    			<div className="area2">	
			    				<input id="verifyCode" type="text" placeholder="verification Code"/>
			    				<img id="codeImg" onClick={this.changeCode()} src={codeImg}/>
			    			</div>
			    			<input id="btn" type="button" value="注册" onClick={this.register()}/>
			    		</div>
			    	</div>
			    </div>
			    <Modal
					title="选择头像"
					transparent
					maskClosable={false}
					visible={this.state.dialogShow}
					onClose={this.onClose}
					footer={[{ text: '确定', onPress: () => { this.onClose(); } }]}
					>
			      	<list>
			      		<List.Item>
			      			<img src="http://112.74.50.192/static/register_pt1.png"/>
			      			<input type="radio" name="portrait" value="1"/>
			      			<img src="http://112.74.50.192/static/register_pt2.png"/>
			      			<input type="radio" name="portrait" value="2"/>
				        	<img src="http://112.74.50.192/static/register_pt3.png"/>
				        	<input type="radio" name="portrait" value="3"/>
				        	<img src="http://112.74.50.192/static/register_pt4.png"/>
				        	<input type="radio" name="portrait" value="4"/>
				        </List.Item>
			      	</list>
				</Modal>
		    </div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));