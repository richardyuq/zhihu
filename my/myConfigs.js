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
	
	render() {
		return (
		    <list>
		    	<Item wrap>账号设置</Item>
		    	<Item wrap>消息设置</Item>
		    	<Item wrap>清除缓存</Item>
		    </list>
		);
	}
});