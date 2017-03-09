/**
 * Class MyFeedbacks
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listViewAync.js';
import { List, Picker, TextareaItem, Button, Modal, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

import util from '../common/util.js';
import "../common/question-row.css";

let index = -1;

let Main = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		let state = this.getContentInitialState();
		state.dialogShow = false;
		return state;
	},
	
	componentDidMount() {
		this.setState({ isLoading: true });
		this.load();
	},
	
	load() {
		util.ajax({
			url: '/FHADMINM/app/yuewen/feedback/getList.do',
			data: { USERNAME: '小明同学' },
			cb: (res) => {
				this.rData = res.data;
				this.setState({
				    dataSource: this.state.dataSource.cloneWithRows(this.rData),
				    isLoading: false,
				});
			}
		});
	},
	
	onClose() {
		this.setState({
			dialogShow: false
		});
	},
	
	onAsk() {
		return (event) => {
			this.setState({
				dialogShow: true
			});
		}
	},
	
	onSave() {
		var fv = this.props.form.getFieldsValue();
		if (!fv["FEED"] || !fv["FEED_TYPE"])
			return;
		util.ajax({
			url: '/FHADMINM/app/yuewen/feedback/save.do',
			data: { 
				FEED_TYPE: fv["FEED_TYPE"][0],
				FEED: fv["FEED"],
				USERNAME: '小明同学'
			},
			cb: (res) => {
				Toast.success('反馈成功');
				this.setState({
					dialogShow: false,
					isLoading: true,
				});
				this.load();
			}
		});
	},
	
	render() {
		const { getFieldProps } = this.props.form;
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.length - 1;
		    	}
		    	const obj = data[index--];
		    	return (
	    			<div className="row-container"
		    			key={rowID}
		    		>
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>{obj["FEED"]}</p>
	    				<p style={{ fontSize:'small',marginTop: '0.1rem' }}>{obj["BACK"]}</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		};
		this.getFooter = (data) => {
			return () => 
			<div style={{ fontSize: 'larger',color:'rgb(0,191,173)' }}>
				<a onClick={this.onAsk()}>
					提出反馈
				</a>
			</div>;
		}
		let content = this.getContent();
		let types = [{value:1,label:'反馈'},{value:2,label:'举报'}];
		return (
			<div>
				{content}
				<Modal
					title="输入反馈"
					transparent
					maskClosable={false}
					visible={this.state.dialogShow}
					onClose={this.onClose}
					footer={[{ text: '确定', onPress: () => { this.onSave(); } }]}
					>
			      	<list>
				      	<Picker data={types} cols={1} {...getFieldProps('FEED_TYPE')}>
				          <List.Item arrow="horizontal">选择类型</List.Item>
				        </Picker>
				        <TextareaItem
			        		{...getFieldProps('FEED')}
				        	placeholder="输入你的反馈"
				        	count={150}
					        rows={3}
					        autoFocus autoHeight
				        />
			      	</list>
				</Modal>
			</div>
		)
	}
});

Main = createForm()(Main);

module.exports = Main;