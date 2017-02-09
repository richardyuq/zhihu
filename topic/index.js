/**
 * Class Topic
 * function:
 * 1、direct to question list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';

let index = -1;

const data = [
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-law.png',
		title: '懂点法律避点坑',
		des: '50个问题，100个回答，568个关注者。'
	},
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-love.png',
		title: '我就想谈个恋爱，怎么就这么难？',
		des: '50个问题，100个回答，568个关注者。'
	},
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-job.png',
		title: '如何规划自己的职业生涯',
		des: '50个问题，100个回答，568个关注者。'
	},
];

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
	
	/**
	 * direct to answer/comment list
	 * @see ../index.js
	 */
	onTitleClick(id) {
		let self = this;
		return (event) => {
			console.log(self);
			self.entry.setFlag(1);
		}
	},

	render() {
		let self = this;
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.length - 1;
		    	}
		    	const obj = data[index--];
		    	return (
		    		<div key={rowID}
		    			style={{
		    				padding: '0.08rem 0.16rem',
		    				backgroundColor: 'white',
		    			}}
		    		>
			    		<div style={{ display: '-webkit-box', display: 'flex' }}>
			    			<a onClick={self.onTitleClick(123)}>
			    				<img style={{ height: '1.28rem', marginTop: '0.2rem', marginRight: '0.12rem' }} src={obj.img} />
			    			</a>
			    			<div style={{ display: 'inline-block' }}>
			    				<p style={{ fontSize:'larger',marginBottom:'0',textAlign:'left' }}>
			    					<a onClick={self.onTitleClick(123)}>{obj.title}</a>
			    				</p>
			    				<p style={{ textAlign:'left',marginTop:'0.12rem' }}>{obj.des}</p>
			    			</div>
			    		</div>
		    		</div>
		    	);
		    };
		};
		return this.getContent();
	}
});