/**
 * Class Login
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'antd-mobile';

import util from '../common/util.js';
import './login.css';

let Main = React.createClass({
	
	getInitialState() {
		return {
			
		};
	},
	
	login() {
		return (event) => {
			util.ajax({
				url: '/FHADMINM//app/yuewen/member/login.do',
				data: {
					'USERNAME': document.getElementById("loginName").value,
					'PASSWORD': document.getElementById("passWord").value,
				},
				cb: (res) => {
					Toast.success('登录成功');
					//window.location = '/zhihu.html';
				}
			});
		};
	},
	
	onRegister() {
		return (event) => {
			window.location = '/register.html';
		}
	},
	
	render() {
		return (
			<div>
				<div style={{height:'8'}}></div>
				<div className="bg">
			    	<div className="login-box">
			    		<div className="title">悦问</div>
			    		<div className="area">
			    			<input id="loginName" type="text" placeholder="loginName"/>
			    			<input id="passWord" type="password" placeholder="passWord"/>
			    			<input id="btn" type="button" value="登录" onClick={this.login()}/>	
			    		</div>
			    		<div className="area2">
			    			<div style={{display:'block',float:'left'}}>
			    				<input type="checkbox"/>记住密码
			    			</div>
			    			<span onClick={this.onRegister()} style={{display:'block',float:'right',color:'#00bfad'}}>
			    				注册账号
			    			</span>
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));