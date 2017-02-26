/**
 * Class Question
 * function:
 * 1、listen the answer
 * 2、direct to answer/comment list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import { Carousel } from 'antd-mobile';
import ListView from '../common/listView.js';

import "./question.css";
import "../common/question-row.css";

const data = [
	{
		title: '有什么简单实用的记忆单词方法吗？另外口语很差不敢开口说，有什么办法消除这种心理障碍吗？',
		len: '59"',
		des: '50人听过，36人觉得有用',
		answerer: {
			name: 'Andy Wang',
			icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/home_list_portrait.png',
			title: '新东方英语口语外教'
		}
	},
	{
		title: '最近《中国诗词大会》第二季吸引了不少人的眼球，为什么一档背诵诗词的节目能如此火爆呢？',
		len: '56"',
		des: '回答价值28元，188人听过，153人觉得有用',
		answerer: {
			name: '康震',
			icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/home_list_portrait.png',
			title: '北京师范大学文学院教授'
		}
	},
	{
		title: '一遇到比较重大的考试就失眠，考前特别紧张，我该如何面对这种情况？',
		len: '55"',
		des: '28人听过，18人觉得有用',
		answerer: {
			name: '姜小花',
			icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/home_list_portrait.png',
			title: '教育心理学专家'
		}
	},
];

let index = -1;

module.exports = React.createClass({
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
	
	/**
	 * direct to answer/comment list
	 * @see ../index.js
	 */
	onTitleClick(id) {
		let entry = this.props.entry;
		return (event) => {
			console.log(id);
			entry.setFlag(1);
		}
	},
	
	/**
	 * listen the answer
	 * call the weixin pay interface
	 */
	onListen(id) {
		return (event) => {
			console.log(id);
		}
	},
	
	render() {
		this.getHeader = (data) => {
			return (
				<div className="need-left-right-margin">
				    <Carousel
				      className="my-carousel" 
				      style={{height: "166px"}}
				      autoplay={true} 
				      infinite
				    >
				        <a href="#" key={1}><img src={`http://7xoh8w.com1.z0.glb.clouddn.com/home_banner.png`} /></a>
				        <a href="#" key={2}><img src={`http://7xoh8w.com1.z0.glb.clouddn.com/home_banner.png`} /></a>
				        <a href="#" key={3}><img src={`http://7xoh8w.com1.z0.glb.clouddn.com/home_banner.png`} /></a>
				    </Carousel>
				</div>
			);
		};
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
	    					<a onClick={this.onTitleClick(123)}>
	    						{obj.title}
	    					</a>
	    				</p>
	    				<p className="float-line">
	    					<img src={obj.answerer.icon} width="48px" height="48px" className="item answerer-icon"/>
	    					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/home_list_listen.png" width="230px" height="48px" className="item"/>
	    					<span className="item len">{obj.len}</span>
	    					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/home_list_useful.png" width="36px" height="36px" className="item" style={{ paddingTop: '0.1rem' }}/>
	    					<div style={{clear:'both'}}></div>
	    				</p>
	    				<p style={{ fontSize:'small',marginLeft: '0.1rem',marginTop: '0.1rem' }}>
	    					{obj.answerer.name}
	    				</p>
	    				<p className="float-line" style={{ color:'rgb(185,185,185)',fontSize:'x-small',marginTop: '0' }}>
	    					<span className="item">{obj.answerer.title}</span>	
	    					<span className="item" style={{float:'right'}}>{obj.des}</span>
	    					<div style={{clear:'both'}}></div>
	    				</p>
		    		</div>
		    	);
		    };
		};
		return this.getContent();
	}
});