/**
 * Class My Listens
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';

module.exports = React.createClass({
	getInitialState() {
		return {
			
		};
	},
	
	render() {
		return (
		    <list>
		    	<img src="http://112.74.50.192/static/my_listens_d1.png" width="375px" height="110px"/>
		    	<img src="http://112.74.50.192/static/my_listens_d2.png" width="375px" height="110px"/>
		    	<img src="http://112.74.50.192/static/my_listens_d3.png" width="375px" height="110px"/>
		    	<img src="http://112.74.50.192/static/my_listens_d4.png" width="375px" height="110px"/>
		    	<img src="http://112.74.50.192/static/my_listens_d5.png" width="375px" height="110px"/>
		    </list>
		);
	}
});