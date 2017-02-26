/**
 * Class Answerer
 * function:
 * 1、ask a question
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, TextareaItem, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';

import "../common/question-row.css";

const data = {
    name: '薛兆也',
    des: '52644人收听，401个回答',
    des2: '《大学说》主持人，在读研究生还没读完万卷书，梦想行变万里路，有点情怀的90后，欢迎向..'
}

let My = React.createClass({
	
	getInitialState() {
		return {
			
		};
	},
	
	getData() {
		return data;
	},
	
	render() {
	    const { getFieldProps } = this.props.form;
	    return (
	        <List>
	        	<div className="row-container" style={{ backgroundColor:'white', borderBottom: '1px solid rgb(213,213,213)' }}>
	        		<p className="float-line" style={{marginBottom: '0.2rem'}}>
	        			<img className="item answerer-icon" src="http://7xoh8w.com1.z0.glb.clouddn.com/answerer_portrait.png"/>
	        			<div style={{ float:'left',position: 'relative' }}>
							<span className="item">{data.name}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small' }}>{data.des}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small',width:'220px', lineHeight:'24px' }}>{data.des2}</span>
						</div>
						<div style={{clear:'both'}}></div>
	        		</p>
	        	</div>
	        	<div style={{textAlign:'right'}}>
    				<img src="http://7xoh8w.com1.z0.glb.clouddn.com/answer_info.gif" width="80px" height="24px"/> 
    			</div>
	        	<TextareaItem
	        		{...getFieldProps('question')}
			        placeholder="输入你的问题，回答被其他人收听后，你将分成收入的一半。若超过72小时未被回答，费用自动退回。"
			        count={200}
			        rows={5}
			        autoFocus autoHeight
		        />
		        <Button type="primary" style={{ margin: '16px 0', padding: '0 16px' }}>
		        	提问
		        </Button>
	        </List>
	    );
	}
});

My = createForm()(My);

module.exports = My;