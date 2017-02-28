/**
 * Class Entry for zhihu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar, TabBar, Icon } from 'antd-mobile';
import Question from './question/index.js';
import Answer from './answer/index.js';
import Answerer from './answerer/index.js';
import Discover from './discover/index.js';
import My from './my/index.js';
import Auth from './my/authForm.js';
import MyAsks from './my/myAsks.js';
import MyAnsweres from './my/myAnsweres.js';
import Record from './Record/index.js';

let Main = React.createClass({
	
	getInitialState() {
		return {
			selectedTab: 'blueTab',
			flag: 0 // level
		}
	},
	
	setFlag(f) {
		this.setState({
			flag : f
		});
	},
	
	renderTabContent(tabText) {
		if (tabText == '问题') {
			return <Question ref="question" entry={this}/>;
		} else if (tabText == '回答') {
			return <Answer ref="answer" entry={this}/>;
		} else if (tabText == '答主') {
			return <Answerer ref="answerer" entry={this}/>;
		} else if (tabText == '发现') {
			return <Discover ref="discover" entry={this}/>;
		} else if (tabText == '我的') {
			return <My ref="my" entry={this}/>;
		} else if (tabText == '认证') {
			return <Auth ref="auth" entry={this}/>;
		} else if (tabText == '我问') {
			return <MyAsks ref="myAsks" entry={this}/>;
		} else if (tabText == '我答') {
			return <MyAnsweres ref="myAnsweres" entry={this}/>;
		} else if (tabText == '录音') {
			return <Record ref="record" entry={this}/>;
		} else {
			// nothing
		}	 	
	},
	
	onClickNarLeft() {
		return (event) => {
			var f = this.state.flag,tab = this.state.selectedTab;
			if (tab !== 'yellowTab') {
				if (f > 0) {
					this.setFlag(--f);
				}
			} else {
				this.setFlag(0);
			}
		}
	},
	
	render() {
		let NavTitle = "NavTitle",tabText = "tabText",NavLeft = null;
		if (this.state.selectedTab === 'blueTab') {
			if (this.state.flag == 0) {
				tabText = "问题";
				NavTitle = "首页";
			} else if (this.state.flag == 1) {
				tabText = "回答";
				NavTitle = "问题详情";
				NavLeft = "返回";
			} else if (this.state.flag == 2) {
				tabText = "答主";
				NavTitle = "答主的主页";
				NavLeft = "返回";
			}
		} else if (this.state.selectedTab === 'redTab') {
			if (this.state.flag == 0) {
				tabText = "发现";
				NavTitle = "发现";
			} else if (this.state.flag == 1) {
				tabText = "答主";
				NavTitle = "答主的主页";
				NavLeft = "返回";
			}
		} else {
			if (this.state.flag == 0) {
				tabText = "我的";
				NavTitle = "我的";
			} else if (this.state.flag == 1) {
				tabText = "认证";
				NavTitle = "认证为答主";
				NavLeft = "返回";
			} else if (this.state.flag == 2) {
				tabText = "我问";
				NavTitle = "我问";
				NavLeft = "返回";
			} else if (this.state.flag == 3) {
				tabText = "答主";
				NavTitle = "答主的主页";
				NavLeft = "返回";
			} else if (this.state.flag == 4) {
				tabText = "我答";
				NavTitle = "我答";
				NavLeft = "返回";
			} else if (this.state.flag == 5) {
				tabText = "录音";
				NavTitle = "我答";
				NavLeft = "返回";
			}
		}
		
	    return (
	      <div>
			<NavBar leftContent={NavLeft} mode="light" onLeftClick={this.onClickNarLeft()}>{NavTitle}</NavBar>
			<TabBar
	        	unselectedTintColor="#949494"
	        	tintColor="#33A3F4"
	        	barTintColor="white"
			>
	        	<TabBar.Item
	        		title="首页"
	        		key="首页"
	        		icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
	        		selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
	        		selected={this.state.selectedTab === 'blueTab'}
	        		badge={0}
	        		onPress={() => {
	        			this.setState({
	        				selectedTab: 'blueTab',
	        				flag: 0
	        			});
	        			setTimeout(() => {
	        				this.refs['question'] && this.refs['question'].refs["mainList"].refs["listview"].scrollTo(0,0);
	        				this.refs['answer'] && this.refs['answer'].refs["mainList"].refs["listview"].scrollTo(0,0);
	        			}, 1000);
	        		}}
	        	>
	        		{this.renderTabContent(tabText)}
	        	</TabBar.Item>
	        	<TabBar.Item
	        		icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
	        		selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
	        		title="发现"
	        		key="发现"
	        		selected={this.state.selectedTab === 'redTab'}
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: 'redTab',
		        			flag: 0
		        		});
		        		setTimeout(() => {
		        			this.refs['discover'] && this.refs['discover'].refs["mainList"].refs["listview"].scrollTo(0,0);
		        			this.refs['answer'] && this.refs['answer'].refs["mainList"].refs["listview"].scrollTo(0,0);
		        		}, 1000);
		        	}}
	        	>
	        		{this.renderTabContent(tabText)}
	        	</TabBar.Item>
	        	<TabBar.Item
	        		icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
	        		selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
	        		title="我的"
	        		key="我的"
	        		selected={this.state.selectedTab === 'yellowTab'}
			        onPress={() => {
			        	this.setState({
			        		selectedTab: 'yellowTab',
			        		flag: 0
			        	});
			        }}
	        	>
	        		{this.renderTabContent(tabText)}
	        	</TabBar.Item>
	        </TabBar>
	      </div>
	    );
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));