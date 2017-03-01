/**
 * Class My Answeres
 * function:
 * 1、My  question list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';

import "../common/question-row.css";

const data = [
	{
		title: '我想学日语，请问该如何入门？有什么日语学习的教材推荐吗？'
	},
	{
		title: '孩子要高考了，作为家长应该做好哪些准备？如何缓解孩子的考试紧张心理'
	},
	{
		title: '现在越来越多的人很难读完一本书了，能推荐一本你觉得拿起来就放不下的书吗？'
	},
];

let index = -1;

let Going = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	getData() {
		return data;
	},
	
	onRecord() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(5);
		}
	},
	
	render() {
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.length - 1;
		    	}
		    	const obj = data[index--];
		    	return (
	    			<div className="row-container"
		    			key={rowID}
		    		>
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>
	    				{obj.title}
	    				<br/>
	    				<a onClick={this.onRecord()}>
	    					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/record_entry.png"/>
	    				</a>
	    				</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		};
		return this.getContent('going');
	}
});

let Already = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	getData() {
		return data;
	},
	
	render() {
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.length - 1;
		    	}
		    	const obj = data[index--];
		    	return (
	    			<div className="row-container"
		    			key={rowID}
		    		>
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>{obj.title}</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		};
		return this.getContent('already');
	}
});

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
  	
  	getInitialState() {
		return {
			
		}
	},
	
	render() {
		return (
			<div>	
				<div style={{ fontSize:'larger',textAlign:'center' }}>待回答</div>
				<Going ref="going" entry={this.props.entry}/>
				<div style={{ fontSize:'larger',textAlign:'center' }}>已回答</div>
				<Already ref="already" entry={this.props.entry}/>
			</div>	
		);
	}
});