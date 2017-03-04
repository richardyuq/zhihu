/**
 * Class My Listens
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';

const Item = List.Item;

module.exports = React.createClass({
	getInitialState() {
		return {
			
		};
	},
	
	onAbout() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(9);
		}
	},
	
	render() {
		return (
		    <list>
			    <Item wrap>用户协议</Item>
		    	<Item wrap>发布规则</Item>
		    	<Item wrap>反馈帮助</Item>
		    	<Item wrap onClick={this.onAbout()}>关于我们</Item>
		    </list>
		);
	}
});