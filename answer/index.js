/**
 * Class Answer
 * 1、listen the answer
 * 2、list the other to be curious
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';
import { Button } from 'antd-mobile';
import "../common/question-row.css";

const data = {
	title: '最近《中国诗词大会》第二季吸引了不少人的眼球，为什么一档背诵诗词的节目能如此火爆呢？',
	len: '56"',
	des: '回答价值28元，188人听过，153人觉得有用',
	asker: {
		name: '螺旋硅藻泥',
		icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/answer_asker_portrait.png',
	},
	answerer: {
		name: '康震',
		icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/home_list_portrait.png',
		title: '北京师范大学文学院教授'
	},
	other: [
	    {
	    	title: '有什么简单实用的记忆单词方法吗？另外口语很差不敢开口说，有什么办法消除这种心理障碍吗？',
	    	len: '59"',
	    	des: '50人听过，36人觉得有用',
			answerer: {
				name: 'Andy Wang',
				icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/home_list_portrait.png',
				title: '新东方英语口语外教'
			}
	    }
	]
};

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
	
	onListen(id) {
		return (event) => {
			console.log(id);
		}
	},
	
	onAsk() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(2);
		}
	},
	
	render() {
		this.getHeader = (data) => {
			return (
				<div className="row-container">
					<p className="float-line" style={{ marginTop:'.2rem',fontSize:'large' }}>
						<img src={data.asker.icon} width="48px" height="48px" className="item answerer-icon"/>
						<span className="item len">{data.asker.name}</span>
						<div style={{clear:'both'}}></div>
					</p>
					<p style={{ fontSize:'larger',marginTop: '0',marginBottom: '.2rem', paddingLeft:'1.3rem' }}>
						{data.title}
					</p>
					<p className="float-line" style={{ paddingTop:'.2rem',fontSize:'large',borderTop: '1px solid rgb(213,213,213)' }}>
						<img src={data.answerer.icon} width="48px" height="48px" className="item answerer-icon"/>
						<div style={{ float:'left',position: 'relative' }}>
							<span className="item">{data.answerer.name}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small' }}>{data.answerer.title}</span>
							<div style={{clear:'both'}}></div>
						</div>
						<div style={{clear:'both'}}></div>
					</p>
					<p className="float-line" style={{ marginTop:'.2rem',fontSize:'large', paddingLeft:'1.1rem' }}>
						<img className="item" src="http://7xoh8w.com1.z0.glb.clouddn.com/home_list_listen.png" width="230px" height="48px"/>
    					<span className="item len">{data.len}</span>
    					<img src="http://7xoh8w.com1.z0.glb.clouddn.com/home_list_useful.png" width="36px" height="36px" className="item" style={{ paddingTop: '0.1rem' }}/>
    					<div style={{clear:'both'}}></div>
					</p>
					<p className="float-line" style={{ color:'rgb(185,185,185)',fontSize:'x-small',marginTop: '0', paddingLeft:'1.3rem' }}>
						<span className="item">{data.des}</span>
						<div style={{clear:'both'}}></div>
					</p>
					<div style={{ textAlign: 'center' }}>
						<Button type="primary" onClick={this.onAsk()} style={{ backgroundColor: 'rgb(0,191,173)', margin:'16px auto', width: '160px',padding: '0 16px' }}>
				        	向TA提问
				        </Button>
				    </div>
					<h3>
						听过这个问题的人还好奇
			        </h3>
				</div>
			);
		};
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.other.length - 1;
		    	}
		    	const obj = data.other[index--];
		    	return (
	    			<div className="row-container"
		    			key={rowID}
		    		>
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>{obj.title}</p>
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
		this.onEndReached = (event) => {
		}; 					
		return this.getContent();
	}
});