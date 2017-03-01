/**
 * Class Discover
 * function:
 * 1、topic list
 * 2、hot answerer list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import { Button,Flex } from 'antd-mobile';
import ListView from '../common/listView.js';

import "../common/question-row.css";

const data = [
	{
		name: '南谷',
		title: '心理咨询师',
		des: '认知自我，解读心理',
		des2: '122个回答，58122收听',
		icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/answerer_portrait.png'
	},
	{
		name: '薛兆也',
		title: '《大学说》主持人',
		des: '爱大学爱主持爱生活',
		des2: '401个回答，52644收听',
		icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/answerer_portrait.png'
	},
	{
		name: "秦臻",
		title: "领航众创空间CEO",
		des: '帮你当好自己的CEO',
		des2: '781个回答，89435人收听',
		icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/answerer_portrait.png'
	}
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
	
	onAsk() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(1);
		}
	},
	
	render() {
		this.getHeader = (data) => {
			const itemPadding = '0.28rem 0.31rem';
			const itemStyle = { padding: itemPadding,borderTop: '1px solid rgb(213,213,213)',borderRight: '1px solid rgb(213,213,213)',borderBottom: '1px solid rgb(213,213,213)'},
				itemStyle2 = { padding: itemPadding,borderTop: '1px solid rgb(213,213,213)',borderRight: '0px solid rgb(213,213,213)',borderBottom: '1px solid rgb(213,213,213)'},
				itemStyle3 = { padding: itemPadding,borderRight: '1px solid rgb(213,213,213)',borderBottom: '0px solid rgb(213,213,213)'},
				itemStyle4 = { padding: itemPadding,borderRight: '0px solid rgb(213,213,213)',borderBottom: '0px solid rgb(213,213,213)'};
			return (
				<div className="row-container" style={{ padding: '0' }}>
					<Flex justify="center" align="baseline" wrap="wrap">
						<div style={itemStyle}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	学科
					        </Button>
				        </div>
				        <div style={itemStyle}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	生活
					        </Button>
				        </div>
				        <div style={itemStyle}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	心理
					        </Button>
				        </div>
				        <div style={itemStyle2}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	社团
					        </Button>
				        </div>
				        <div style={itemStyle3}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	入学
					        </Button>
				        </div>
				        <div style={itemStyle3}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	毕业
					        </Button>
				        </div>
				        <div style={itemStyle3}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
					        	趣问
					        </Button>
				        </div>
				        <div style={itemStyle4}>
							<Button type="ghost" size="small" inline style={{borderColor:'rgb(0,191,173)', color: 'rgb(0,191,173)'}}>
				        		其他
				        	</Button>
			        	</div>	
					</Flex>
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
		    			className="row-container" style={{ backgroundColor:'white' }}
		    		>
			    		<p className="float-line" style={{marginBottom: '0.2rem'}}>
			    			<a onClick={this.onAsk()}>
		        				<img className="item answerer-icon" src={obj.icon} width="100px" height="100px"/>
		        			</a>
		        			<div style={{ float:'left',position: 'relative',marginTop: '0.2rem' }}>
								<span className="item" style={{fontSize:'larger'}}>
								<a onClick={this.onAsk()}>{obj.name}</a>
								</span>
								<Button type="ghost" size="small" inline style={{ float:'right',backgroundColor:'rgb(0,191,173)',borderColor:'rgb(0,191,173)', color: 'white' }}>
				        			订阅
				        		</Button>
								<div style={{clear:'both'}}></div>
								<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small' }}>{obj.des}</span>
								<div style={{clear:'both'}}></div>
								<span className="item" style={{ marginTop: '0.36rem',color:'rgb(185,185,185)',fontSize:'x-small',width:'220px', lineHeight:'24px' }}>{obj.des2}</span>
							</div>
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