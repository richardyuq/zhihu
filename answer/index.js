/**
 * Class Answer
 * 1、listen the answer
 * 2、list the comments
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';

const data = {
	title: '因为工作原因睡眠饮食都不规律，导致胃疼，应该咋样搭配饮食才能更好的调整受伤的胃呢？',
	answers: [
	    {
	    	id: 123,
	    	des: '价值1元，2人听过，1人觉得值'
	    },
	    {
	    	id: 456,
	    	des: '价值1元，2人听过，1人觉得值'
	    }
	],
	comments: [
		{
			who: '虞勤',
			comment: '讨论讨论',
			time: '刚刚'
		},
		{
			who: '虞勤',
			comment: '讨论讨论',
			time: '1天前'
		},
		{
			who: '虞勤',
			comment: '讨论讨论',
			time: '2天前'
		},
	]
};

let index = -1;

module.exports = React.createClass({
	mixins: [ListView],
	
	setEntry: function(entry) {
    	this.entry = entry;
    },
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	getData() {
		return data;
	},
	
	onListen(id) {
		return (event) => {
			console.log(id);
		}
	},
	
	render() {
		this.getHeader = (data) => {
			return (
			<div
				style={{
					padding: '0.08rem 0.16rem',
					backgroundColor: 'white',
				}}
				>
				<h3 style={{ padding: 2, marginBottom: '0.08rem', textAlign: 'left' }}>
					{data.title}
		        </h3>
				<a onClick={this.onListen(123)}>
					<img style={{ height: '100%', marginTop: '0.2rem' }} src="http://7xoh8w.com1.z0.glb.clouddn.com/icon-listen.png" />
				</a>
				<h3 style={{ padding: 2, marginBottom: '0.08rem'}}>
					评 论
		        </h3>
			</div>);
		};
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.comments.length - 1;
		    	}
		    	const obj = data.comments[index--];
		    	return (
		    		<div key={rowID}
		    			style={{
		    				padding: '0.08rem 0.16rem',
		    				backgroundColor: 'white',
		    			}}
		    		>
	    				<p style={{ fontSize:'large',marginBottom:'0',textAlign:'left' }}>
	    					{obj.who}
	    				</p>
	    				<p style={{ fontSize:'larger',marginBottom:'0',textAlign:'left' }}>
    						{obj.comment}
    					</p>
	    				<p style={{ textAlign:'left',marginTop:'0.12rem' }}>{obj.time}</p>
		    		</div>
		    	);
		    };
		};
		return this.getContent();
	}
});