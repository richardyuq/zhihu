/**
 * Class My Menu
 * function:
 * 1、My action menu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, Button, Flex } from 'antd-mobile';

import "../common/question-row.css";

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return {
			
		};
	},
	
	onAuth() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(1);
		}
	},
	
	on2Asks() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(2);
		}
	},
	
	on2Answeres() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(4);
		}
	},
	
	render() {
		const padding = "0.6rem";
	    return (
	        <list>
	        	<div style={{textAlign: 'center'}}>
	        		<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_portrait.png" width="120px" height="90px"/>
	        		<div>小明同学</div>
	        		<Button type="primary" onClick={this.onAuth()} style={{ backgroundColor: 'rgb(0,191,173)', width: '160px', margin: '16px auto', padding: '0 16px' }}>
		        		认证成为答主
		        	</Button>
		        	<div>提过10个问题，答过0个问题</div>
		        	<hr/>
		        	<div className="row-container" style={{ padding: '0' }}>
		        		<Flex justify="center" align="baseline" wrap="wrap">
		        			<div style={{padding: padding}}>
		        				<a onClick={this.on2Asks()}>
		        					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_asks.png" width="60px" height="60px"/>
		        				</a>	
		        			</div>
		        			<div style={{padding: padding}}>	
		        				<a onClick={this.on2Answeres()}>	
		        					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_answeres.png" width="60px" height="60px"/>
		        				</a>
		        			</div>
		        			<div style={{padding: padding}}>	
		        				<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_listens.png" width="60px" height="60px"/>
		        			</div>
		        			<div style={{padding: padding}}>	
		        				<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_incomes.png" width="60px" height="60px"/>
		        			</div>
		        			<div style={{padding: padding}}>	
		        				<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_configs.png" width="60px" height="60px"/>
		        			</div>
		        			<div style={{padding: padding}}>	
		        				<img src="http://7xoh8w.com1.z0.glb.clouddn.com/my_services.png" width="60px" height="60px"/>
		        			</div>
		        		</Flex>		
		        	</div>
		        	<hr/>
	        	</div>
	        </list>
	    );
	}
});