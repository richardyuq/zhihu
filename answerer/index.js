/**
 * Class Answerer
 * function:
 * 1、ask a question
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import "../common/question-row.css";
import data from '../common/data2.js';

let Main = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
    	param: React.PropTypes.object.isRequired
  	},
	
	getInitialState() {
		return {
			
		};
	},
	
	getData() {
		return data;
	},
	
	render() {
	    const { getFieldProps } = this.props.form;
	    let param = this.props.param,obj = data[param.index];
	    return (
	        <List>
	        	<div className="row-container" style={{ backgroundColor:'white', borderBottom: '1px solid rgb(213,213,213)' }}>
	        		<p className="float-line" style={{marginBottom: '0.2rem'}}>
	        			<img className="item answerer-icon" src={obj.icon} width="120px" height="120px"/>
	        			<div style={{ float:'left',position: 'relative',marginTop: '0.2rem' }}>
							<span className="item">{obj.name}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small' }}>{obj.des}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small',width:'200px', lineHeight:'24px' }}>{obj.des2}</span>
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
			    <div style={{ textAlign: 'center' }}>
			        <Button type="primary" style={{ backgroundColor: 'rgb(0,191,173)', width: '100px', margin: '16px auto', padding: '0 16px' }}>
			        	提问
			        </Button>
		        </div>
	        </List>
	    );
	}
});

Main = createForm()(Main);

module.exports = Main;