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
import data from '../common/data.js';

import "./question.css";
import "../common/question-row.css";

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
	onTitleClick(index) {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(1,{ index: index + 1 });
		}
	},
	
	/**
	 * listen the answer
	 * call the weixin pay interface
	 */
	onListen(index) {
		return (event) => {
			if (!window.audio)  {
				window.audio = document.createElement("audio");
			}
			window.audio.src = data[index + 1].audio;
			window.audio.play();
		}
	},
	
	onStar(id) {
		return (event) => {
			let item = event.target;
			if (item.src.indexOf('useful2') > 0 )
				item.src = "http://112.74.50.192/static/home_useful.png";
			else
				item.src = "http://112.74.50.192/static/home_useful2.png";
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
				        <a href="#" key={1}><img src={`http://112.74.50.192/static/banner1.png`} /></a>
				        <a href="#" key={2}><img src={`http://112.74.50.192/static/banner2.png`} /></a>
				        <a href="#" key={3}><img src={`http://112.74.50.192/static/banner3.png`} /></a>
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
	    					<a onClick={this.onTitleClick(index)}>
	    						{obj.title}
	    					</a>
	    				</p>
	    				<p className="float-line">
	    					<img src={obj.answerer.icon} width="48px" height="48px" className="item answerer-icon"/>
	    					<a onClick={this.onListen(index)}>	
	    						<img src="http://112.74.50.192/static/home_listen.png" width="230px" height="48px" className="item"/>
	    					</a>	
	    					<span className="item len">{obj.len}</span>
	    					<img onClick={this.onStar()} src="http://112.74.50.192/static/home_useful.png" width="36px" height="36px" className="item" style={{ paddingTop: '0.1rem' }}/>
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
		this.onEndReached = (event) => {
		};
		return this.getContent();
	}
});