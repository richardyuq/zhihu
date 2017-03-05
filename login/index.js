/**
 * Class Login
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './login.css';

let Main = React.createClass({
	
	getInitialState() {
		return {
			
		};
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
			    			<input id="passWord" type="text" placeholder="passWord"/>
			    			<input id="btn" type="button" value="登录"/>	
			    		</div>
			    		<div className="area2">
			    			<div style={{display:'block',float:'left'}}>
			    				<input type="checkbox"/>记住密码
			    			</div>
			    			<span style={{display:'block',float:'right',color:'#00bfad'}}>
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