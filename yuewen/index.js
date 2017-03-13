/**
 * Class Yuewen Index
 * 
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
	
	onJiaowu() {
		return (event) => {
			location = 'http://survey.veirui.com/jq/11662081.aspx';
		}
	},
	
	render() {
		return (
		    <div className="row-container" style={{ textAlign:'center' }}>
		    	<div>
		    		<a onClick={this.onAsk()}>
		    			<img src="http://112.74.50.192/static/yw_bk1.png" width="360px" height="140px"/>
		    		</a>		
		    	</div>
		    	<div>
		    		<a onClick={this.onSearch()}>
		    			<img src="http://112.74.50.192/static/yw_bk2.png" width="360px" height="140px"/>
		    		</a>	
		    	</div>
		    	<div>
		    		<a onClick={this.onJiaowu()}>
		    			<img src="http://112.74.50.192/static/yw_bk3.png" width="360px" height="140px"/>
		    		</a>
		    	</div>
		    	<div>
		    		<img src="http://112.74.50.192/static/yw_bk4.png" width="360px" height="140px"/>	
		    	</div>
		    </div>	
		);
	}
});