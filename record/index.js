/**
 * Class Record
 * function:
 * 1、record the answer voice
 * 2、upload the voice 2 server
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Flex } from 'antd-mobile';

import "./record.css";

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
  	
  	getInitialState() {
		return {
			icon: 'http://7xoh8w.com1.z0.glb.clouddn.com/record_start.png',
			time: 0.00,
			info1Display: 'block',
			info2Display: 'none',
			info3Display: 'none',
			actionInfoDisplay: 'none'
		};
	},
	
	onAction() {
		let entry = this.props.entry;
		return (event) => {
			var src = event.target.src;
			if (src.indexOf('start') > 0) { //press start
				this.setState({
					icon : 'http://7xoh8w.com1.z0.glb.clouddn.com/record_stop.png',
					time: 0.01,
					info1Display: 'none',
					info2Display: 'block',
					info3Display: 'none',
					actionInfoDisplay: 'none'
				});
				setInterval(() => {
					this.setState({
						time: this.state.time + 0.01
					});
				},1000);
			} else if (src.indexOf('stop') > 0) { //press stop
				this.setState({
					icon : 'http://7xoh8w.com1.z0.glb.clouddn.com/record_play.png',
					time: 0.01,
					info1Display: 'none',
					info2Display: 'none',
					info3Display: 'block',
					actionInfoDisplay: 'block'
				});
			} else { //press play
				//play
			}
		}
	},
	
	render() {
		const padding = "0.6rem";
		return (
			<div className="container">	
				<div className="question-title">小明同学的提问</div>
				<div className="question-body">人们对软件架构师有哪些常见的误解？</div>
				<div className="info">
					<div className="info1" style={{display:this.state.info1Display}}>录音最长2分钟<br/>点击按钮开始录音</div>
					<div className="info2" style={{display:this.state.info2Display}}>
						<span id="clock">{this.state.time}</span>
						<br/>
						轻按下方按钮结束录音
					</div>
					<div className="info3" style={{display:this.state.info3Display}}>
						轻按下方按钮回放录音
					</div>
				</div>
				<div className="action" style={{height: '100px'}}>
					<Flex justify="center" align="start" wrap="wrap">
						<div style={{padding: padding,display:this.state.actionInfoDisplay}}>重录</div>
						<div style={{padding: '0'}}>
							<img onClick={this.onAction()} src={this.state.icon}/>
						</div>
						<div style={{padding: padding,display:this.state.actionInfoDisplay,color:'blue'}}>确认发送？</div>
					</Flex>
				</div>
			</div>	
		);
	}
});