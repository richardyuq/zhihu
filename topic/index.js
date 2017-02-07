import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';

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
	
	onTitleClick(id) {
		return (event) => {
			console.log(id);
			this.entry.setFlag(1);
		}
	},

	render() {
		return this.getContent();
	}
});