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

const data = [
	{
		title: '因为工作原因睡眠饮食都不规律，导致胃疼，应该咋样搭配饮食才能更好的调整受伤的胃呢？',
		des: '价值1元，2人听过，1人觉得值'
	},
	{
		title: '最近曝光了很多食品添加了甲醛防腐，这样对健康有怎样的伤害？',
		des: '价值1元，2人听过，1人觉得值'
	},
	{
		title: '元宵节吃春卷、元宵的习俗是从什么时候开始的？',
		des: '价值1元，2人听过，1人觉得值'
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
		    		<div style={{padding:'0.1rem 0',borderBottom:'1px solid rgb(253,253,253)'}}>
			    		<div style={{float:'left',backgroundColor:'red',color:'white',margin:'0.1rem',padding:'0.1rem'}}>每日头条</div>
			    		<div style={{float:'right',lineHeight:'0.72rem',marginRight:'0.1rem'}}>查看全部 > </div>
			    		<div style={{clear:'both'}}></div>
		    		</div>
				    <Carousel
				      className="my-carousel" 
				      style={{height: "221px"}}
				      autoplay={true} 
				      infinite
				    >
				        <a href="#" key={1}><img src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`} /></a>
				        <a href="#" key={2}><img src={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`} /></a>
				        <a href="#" key={3}><img src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`} /></a>
				    </Carousel>
			        <div style={{
					    backgroundColor: '#F5F5F9',
					    height: 8,
					    borderTop: '1px solid #ECECED',
					    borderBottom: '0px solid #ECECED',
					  }}
					/>
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
		    		<div key={rowID}
		    			style={{
		    				padding: '0.08rem 0.16rem',
		    				backgroundColor: 'white',
		    			}}
		    		>
	    				<p style={{ fontSize:'larger',marginBottom:'0',textAlign:'left' }}>
	    					<a onClick={this.onTitleClick(123)}>
	    						{obj.title}
	    					</a>
	    				</p>
	    				<a onClick={this.onListen(123)}>
	    					<img style={{ height: '100%', marginTop: '0.2rem' }} src="http://7xoh8w.com1.z0.glb.clouddn.com/icon-listen.png" />
	    				</a>
	    				<p style={{ textAlign:'left',marginTop:'0.12rem' }}>{obj.des}</p>
		    		</div>
		    	);
		    };
		};
		return this.getContent();
	}
});