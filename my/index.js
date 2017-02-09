/**
 * Class My
 * function:
 * 1、ask a question
 * 2、ask list/listen list
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, TextareaItem, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';

const data = [
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-law.png',
		title: '懂点法律避点坑',
		des: '50个问题，100个回答，568个关注者。'
	},
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-love.png',
		title: '我就想谈个恋爱，怎么就这么难？',
		des: '50个问题，100个回答，568个关注者。'
	},
	{
		img: 'http://7xoh8w.com1.z0.glb.clouddn.com/icon-job.png',
		title: '如何规划自己的职业生涯',
		des: '50个问题，100个回答，568个关注者。'
	},
];

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
	        	<TextareaItem
	        		{...getFieldProps('question')}
			        placeholder="输入你的问题，回答被其他人收听后，你将分成收入的一半。若超过72小时未被回答，费用自动退回。"
			        count={200}
			        rows={10}
			        autoFocus autoHeight
		        />
		        <Button type="primary" style={{ margin: '16px 0', padding: '0 16px' }}>
		          付费10元提问
		        </Button>
		        <div style={{ height: 8 }} />
		        <SegmentedControl values={['我问过的', '我听过的']} />
		        <div style={{ height: 300 }} />
	        </List>
	    );
	}
});

My = createForm()(My);

module.exports = My;