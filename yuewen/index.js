/**
 * Class Yuewen Index
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';

import "../common/question-row.css";

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},

	getInitialState() {
		return {
			
		};
	},
	
	onAsk() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(1,{index: 3});
		}
	},
	
	onSearch() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(2);
		}
	},
	
	render() {
		return (
		    <div className="row-container" style={{ textAlign:'center' }}>
		    	<div>
		    		<a onClick={this.onAsk()}>
		    			<img src="http://112.74.50.192/static/yw_bk1.png" width="360px" height="150px"/>
		    		</a>		
		    	</div>
		    	<div>
		    		<a onClick={this.onSearch()}>
		    			<img src="http://112.74.50.192/static/yw_bk2.png" width="360px" height="150px"/>
		    		</a>	
		    	</div>
		    	<div className="float-line">
		    		<img className="item" src="http://112.74.50.192/static/yw_bk3.png" width="175px" height="150px"/>
		    		<img className="item" src="http://112.74.50.192/static/yw_bk4.png" width="175px" height="150px"/>
		    		<div style={{clear:'both'}}></div>
		    	</div>
		    </div>	
		);
	}
});