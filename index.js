import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar, TabBar, Icon } from 'antd-mobile';
import Topic from './topic/index.js';
import Discover from './discover/index.js';

let Main = React.createClass({
	
	componentDidMount: function() {
		this.refs['topic'] && this.refs['topic'].setEntry(this);
	},
	
	componentDidUpdate: function() {
		this.refs['topic'] && this.refs['topic'].setEntry(this);
		this.refs['discover'] && this.refs['discover'].setEntry(this);
	},
	
	getInitialState() {
		return {
			selectedTab: 'blueTab'
		}
	},
	
	renderTabContent(tabText) {
		if (tabText == '首页') {
			return <Topic ref='topic'/>;
		} else if (tabText == '发现') {
			return <Discover ref='discover'/>;
		} else {
			// my
		}	
	},
	
	render() {
	    return (
	      <div>
	      	<div style={{ height: 8 }} />
			<NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
				rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
			>话题列表</NavBar>
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
	        		badge={1}
	        		onPress={() => {
	        			this.setState({
	        				selectedTab: 'blueTab',
	        			});
	        			this.refs['topic'].refs["mainList"].refs["listview"].scrollTo(0,0);
	        		}}
	        		>
	        		{this.renderTabContent('首页')}
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
		        		});
		        		setTimeout(() => {
		        			this.refs['discover'].refs["mainList"].refs["listview"].scrollTo(0,0);
		        		}, 1000);
		        	}}
	        		>
	        		{this.renderTabContent('发现')}
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