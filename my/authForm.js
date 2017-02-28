/**
 * Class auth2Answerer Form
 * function:
 * 1、submit the answer auth form
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, InputItem, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let Main = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return {
			
		};
	},
	
	render() {
	    const { getFieldProps } = this.props.form;
	    return (
	    	<div>	
		    	<InputItem
		            {...getFieldProps('name')}
		            placeholder="输入姓名（实名）"
		        />
		        <TextareaItem
	        		{...getFieldProps('title')}
			        placeholder="输入你的头衔或经验，如某高校教授，生涯规划专家等"
			        count={40}
			        rows={3}
			        autoFocus autoHeight
			    />
				<TextareaItem
		        		{...getFieldProps('good')}
				        placeholder="输入你擅长领域的和你能够解答的问题，如擅长初中英语辅导，提供英语学习相关问题的咨询等"
				        count={300}
				        rows={5}
				        autoFocus autoHeight
			    />
				<div style={{textAlign: 'center',marginTop:'.36rem'}}>上传实名认证材料</div>
				<div style={{ textAlign: 'center' }}>
			        <Button type="primary" style={{ backgroundColor: 'rgb(0,191,173)', width: '160px', margin: '16px auto', padding: '0 16px' }}>
			        	立即认证
			        </Button>
		        </div>
			</div>
	    );
	}    
	
});

Main = createForm()(Main);

module.exports = Main;
