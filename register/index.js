/**
 * Class Register
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'antd-mobile';

import util from '../common/util.js';
import './register.css';

let Main = React.createClass({
	
	getInitialState() {
		return {
			
		};
	},
	
	changeCode() {
		return (event) => {
			event.target.src = "http://112.74.50.192/FHADMINM/code.do?t=" + new Date().getTime();
		};
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
		    </div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));