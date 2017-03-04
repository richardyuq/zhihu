/**
 * Class Yuewen Index
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile';

import "./search.css";
import "../common/question-row.css";

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},

	getInitialState() {
		return {
			
		};
	},
	
	render() {
		return (
		    <div className="row-container" style={{ textAlign:'center' }}>
		    	<div>
			    	<input type="text" className="inputItem"/>
		            <span className="btn">取消</span>
		        </div>
		        <div className="float-line" style={{textAlign:'left'}}>
		        	<span className="item title">热门搜索</span>
		        	<div style={{clear:'both'}}></div>
		        </div>
		        <div className="float-line" style={{textAlign:'left'}}>
		        	<span className="item word">课外</span>
		        	<span className="item word">校园</span>
		        	<span className="item word">考试</span>
		        	<span className="item word">选课</span>
		        	<span className="item word">自学</span>
		        	<span className="item word">放假</span>
		        	<span className="item word">老师</span>
		        	<span className="item word">社团</span>
		        </div>
		    </div>	
		);
	}
});