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
		} else {
			return <My ref="my"/>;
		}	
	},
	
	render() {
		let NavTitle = "NavTitle",tabText = "tabText";
		if (this.state.selectedTab === 'blueTab') {
			if (this.state.flag == 0) {
				tabText = "问题";
				NavTitle = "首页";
			} else if (this.state.flag == 1) {
				tabText = "回答";
				NavTitle = "问题详情";
			} else if (this.state.flag == 2) {
				tabText = "答主";
				NavTitle = "答主的主页";
			}
		} else if (this.state.selectedTab === 'redTab') {
			if (this.state.flag == 0) {
				tabText = "发现";
				NavTitle = "发现";
			} else if (this.state.flag == 1) {
				tabText = "回答";
				NavTitle = "问题详情";
			}
		} else {
			tabText = "我的";
			NavTitle = "我的";
		}
		
	    return (
	      <div>
			<NavBar mode="light" onLeftClick={() => console.log('onLeftClick')}
				rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
			>{NavTitle}</NavBar>
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
		        			flag: 1
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
	        		{this.renderTabContent('我的')}
	        	</TabBar.Item>
	        </TabBar>
	      </div>
	    );
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));