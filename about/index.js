/**
 * Class About for zhihu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar, List, Icon, Flex, WhiteSpace } from 'antd-mobile';

import "./about.css";

const Item = List.Item;

module.exports = React.createClass({
	
	getInitialState() {
		return {

		}
	},
	
	render() {	
		const PlaceHolder = (className,content) => (
				  <div className={className}>
				  	{content}
				  </div>
				);
	    return (
		    <div>
				<div className="flex-container">
					<Flex justify="center">
			          {PlaceHolder('inline',<img src='http://7xoh8w.com1.z0.glb.clouddn.com/zhuhu-logo.png'/>)}
			          {PlaceHolder('inline2',<div style={{textAlign:'left'}}>「悦问」是一个为教育而生的轻问答平台，旨在帮助用户以最便捷的方式获得知识经验和针对性解决方法。悦问好答，分享经验，解决困惑，协同成长。</div>)}
			        </Flex>
				</div>
				<list>
					<Item wrap>欢迎页</Item>
					<Item wrap>版权信息</Item>
				</list>
				<div className="flex-container">
					<Flex justify="center" wrap="wrap">
						{PlaceHolder('inline2',<span>Copyright ©2016-2017<br/>杭州葳锐信息科技有限公司</span>)}
			        </Flex>
		        </div>
			</div>
	    );
	}
});