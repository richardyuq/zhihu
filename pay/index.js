/**
 * Class Pay
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, NavBar, List, Icon, Flex, WhiteSpace } from 'antd-mobile';

import "./pay.css";

const Item = List.Item;

let Main = React.createClass({
	
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
		      	<div style={{ height: 8 }} />
				<NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}>确认交易</NavBar>
				<div className="flex-container">
					<Flex justify="center" wrap="wrap">
						{PlaceHolder('inline2',<div>在「悦问」收听steven的回答，需支付：</div>)}
						{PlaceHolder('inline2',<div style={{color:'red',fontWeight:'bold',fontSize:'larger'}}>￥1.00</div>)}
			        </Flex>
			        <WhiteSpace/>
			        <Flex>
						<Flex.Item>{PlaceHolder('inline',<div>选择支付方式：</div>)}</Flex.Item>
					</Flex>
		        </div>
				<list>
					<Item wrap>
						<div style={{float:'left',width:'90%'}}>
							<img src='http://7xoh8w.com1.z0.glb.clouddn.com/%E7%BB%BF%E8%89%B2logo.png'/>
							<span style={{paddingLeft:'10px'}}>微信支付</span>
						</div>	
						<div style={{float:'right',width:'10%'}}>
							<Checkbox></Checkbox>
						</div>
					</Item>
					<Item wrap>其他支付方式</Item>
				</list>
			</div>
	    );
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));