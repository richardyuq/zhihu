/**
 * Class Answerer
 * function:
 * 1、ask a question
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, TextareaItem, Button, Modal, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

import util from '../common/util.js';
import "../common/question-row.css";
import data from '../common/data2.js';

let Main = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
    	param: React.PropTypes.object.isRequired
  	},
	
	getInitialState() {
		return {
			warnShow: false
		};
	},
	
	getData() {
		return data;
	},
	
	showWarning() {
		return (event) => {
			this.setState({
				warnShow: true
			});
		}
	},
	
	onClose() {
		this.setState({
			warnShow: false
		});
	},
	
	onAsk() {
		return (event) => {
			var fv = this.props.form.getFieldsValue();
			util.ajax({
				url: '/FHADMINM/app/yuewen/save.do',
				data: { 
					TITILE: fv["TITILE"],
					ASKER: '小明同学',
					ANSWERER: '小明同学'
				},
				cb: (res) => {
					Toast.success('保存成功');
				}
			});
		}
	},
	
	render() {
	    const { getFieldProps } = this.props.form;
	    let param = this.props.param,obj = data[param.index];
	    return (
	    	<div>
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
	    				<img onClick={this.showWarning()} src="http://7xoh8w.com1.z0.glb.clouddn.com/answer_info.gif" width="80px" height="24px"/> 
	    			</div>
		        	<TextareaItem
		        		{...getFieldProps('TITILE')}
				        placeholder="输入你的问题，回答被其他人收听后，你将分成收入的一半。若超过72小时未被回答，费用自动退回。"
				        count={200}
				        rows={5}
				        autoFocus autoHeight
			        />
				    <div style={{ textAlign: 'center' }}>
				        <Button type="primary" onClick={this.onAsk()} style={{ backgroundColor: 'rgb(0,191,173)', width: '100px', margin: '16px auto', padding: '0 16px' }}>
				        	提问
				        </Button>
			        </div>
		        </List>
				<Modal
					title="警 告"
					transparent
					maskClosable={false}
					visible={this.state.warnShow}
					onClose={this.onClose}
					footer={[{ text: '确定', onPress: () => { this.onClose(); } }]}
					>
				      <div style={{ textAlign:'left',height: '180px',overflow: 'auto',lineHeight:'0.36rem' }}>
				      用户在国家法律规制范围内拥有发布信息的权利，但不得发布含有以下内容的信息：<br/>
				      1. 含有反动内容<br/>
				      2. 含有色情、暴力、恐怖内容<br/>
				      3. 具有广告性质<br/>
				      4. 含有人身攻击内容<br/>
				      5. 含有违背伦理道德内容<br/>
				      6. 具有恶意、无聊和灌水性质<br/>
				      7. 涉及违法犯罪的内容<br/>
				      8. 其他法律、行政法规和国家规定禁止的内容。<br/>
				      <br/>
				      违规处理：<br/>
				      如用户违反上述内容发布规则，悦问有权在不告知情况下对违规内容及帐号开展处罚及处理。<br/>
				      针对违规内容，悦问保有删除相关问题的权利。<br/>
				      针对发布违规内容的账户，悦问保有如下权利：<br/>
				      限制该帐号进行搜索、禁止该帐号在平台提问、禁止该帐号回答提问者的问题，直至注销该帐号。<br/>
				      具体规范见【我的】-【客服】-【发布规则】
				      </div>
				</Modal>
			</div>
	    );
	}
});

Main = createForm()(Main);

module.exports = Main;