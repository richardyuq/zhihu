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
import MyListens from './my/myListens.js';
import MyConfigs from './my/myConfigs.js';
import MyServices from './my/myServices.js';
import About from './about/index.js';
import Record from './Record/index.js';
import Yuewen from './yuewen/index.js';
import Search from './yuewen/search.js';
import MyFeedbacks from './my/myFeedbacks.js';

window.audio = null;

let Main = React.createClass({
	
	getInitialState() {
		return {
			selectedTab: 'blueTab',
			flag: 0,// level
			param: null
		}
	},
	
	setFlag(f,param) {
		this.setState({
			flag: f,
			param: param
		});
	},
	
	renderTabContent(tabText) {
		if (tabText == '问题') {
			return <Question ref="question" entry={this}/>;
		} else if (tabText == '回答') {
			return <Answer ref="answer" entry={this} param={this.state.param}/>;
		} else if (tabText == '答主') {
			return <Answerer ref="answerer" entry={this} param={this.state.param}/>;
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
			return <Record ref="record" entry={this} param={this.state.param}/>;
		} else if (tabText == '我听') {
			return <MyListens ref="myListens" entry={this}/>;
		} else if (tabText == '设置') {
			return <MyConfigs ref="myConfigs" entry={this}/>;
		} else if (tabText == '客服') {
			return <MyServices ref="myServices" entry={this}/>;
		} else if (tabText == '关于') {
			return <About ref="about" entry={this}/>;
		} else if (tabText == '悦问') {
			return <Yuewen ref="yuewen" entry={this}/>;
		} else if (tabText == '搜索') {
			return <Search ref="search" entry={this}/>;
		} else if (tabText == '反馈') {
			return <MyFeedbacks ref="myFeedbacks" entry={this}/>;
		} else {
			// nothing
		}	 	
	},
	
	onClickNarLeft() {
		return (event) => {
			var f = this.state.flag,tab = this.state.selectedTab;
			if (tab == 'greenTab' || tab == 'yellowTab') {
				this.setFlag(0);
			} else {
				if (f > 0) {
					this.setFlag(--f,this.state.param);
				}
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
			} else {
				//nothing
			}
		} else if (this.state.selectedTab === 'redTab') {
			if (this.state.flag == 0) {
				tabText = "发现";
				NavTitle = "发现";
			} else if (this.state.flag == 1) {
				tabText = "答主";
				NavTitle = "答主的主页";
				NavLeft = "返回";
			} else {
				//nothing
			}
		} else if (this.state.selectedTab === 'greenTab') {
			if (this.state.flag == 0) {
				tabText = "悦问";
				NavTitle = "悦问";
			} else if (this.state.flag == 1) {
				tabText = "答主";
				NavTitle = "答主的主页";
				NavLeft = "返回";
			} else if (this.state.flag == 2) {
				tabText = "搜索";
				NavTitle = "搜索";
				NavLeft = "返回";
			} else {
				//nothing
			}
		} else if (this.state.selectedTab === 'yellowTab') {
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
			} else if (this.state.flag == 6) {
				tabText = "我听";
				NavTitle = "我听";
				NavLeft = "返回";
			} else if (this.state.flag == 7) {
				tabText = "设置";
				NavTitle = "设置";
				NavLeft = "返回";
			} else if (this.state.flag == 8) {
				tabText = "客服";
				NavTitle = "客服";
				NavLeft = "返回";
			} else if (this.state.flag == 9) {
				tabText = "关于";
				NavTitle = "关于";
				NavLeft = "返回";
			} else if (this.state.flag == 10) {
				tabText = "反馈";
				NavTitle = "反馈";
				NavLeft = "返回";
			} else {
				//nothing
			}
		}

		return (
	      <div>
	      	<div style={{height:'8'}}></div>
			<NavBar leftContent={NavLeft} mode="light" onLeftClick={this.onClickNarLeft()}>{NavTitle}</NavBar>
			<TabBar
	        	unselectedTintColor="#949494"
	        	tintColor="#33A3F4"
	        	barTintColor="white"
			>
	        	<TabBar.Item
	        		key="首页"
	        		icon={ <div><img src="http://112.74.50.192/static/tab_home_gray.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		selectedIcon={ <div><img src="http://112.74.50.192/static/tab_home_light.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		iconStyle={{ width:'98px',height:'98px' }}
	        		selected={this.state.selectedTab === 'blueTab'}
	        		onPress={() => {
	        			this.setState({
	        				selectedTab: 'blueTab',
	        				flag: 0
	        			});
	        		}}
	        	>
	        		{this.renderTabContent(tabText)}
	        	</TabBar.Item>
	        	<TabBar.Item
	        		icon={ <div><img src="http://112.74.50.192/static/tab_discover_gray.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		selectedIcon={ <div><img src="http://112.74.50.192/static/tab_discover_light.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		key="发现"
	        		selected={this.state.selectedTab === 'redTab'}
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: 'redTab',
		        			flag: 0
		        		});
		        	}}
	        	>
	        		{this.renderTabContent(tabText)}
	        	</TabBar.Item>
	        	<TabBar.Item
	        		icon={ <div><img src="http://112.74.50.192/static/tab_yw_gray.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		selectedIcon={ <div><img src="http://112.74.50.192/static/tab_yw_light.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		key="悦问"
	        		selected={this.state.selectedTab === 'greenTab'}
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: 'greenTab',
		        			flag: 0
		        		});
		        	}}
	        	>
        			{this.renderTabContent(tabText)}
        		</TabBar.Item>
	        	<TabBar.Item
	        		icon={ <div><img src="http://112.74.50.192/static/tab_my_gray.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
	        		selectedIcon={ <div><img src="http://112.74.50.192/static/tab_my_light.png" style={{ width:"0.92rem",height:"0.92rem" }}/></div> }
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