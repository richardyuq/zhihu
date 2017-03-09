/**
 * Class My Answeres
 * function:
 * 1、My  question list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listViewAync.js';

import util from '../common/util.js';
import "../common/question-row.css";

let index = -1;

let Going = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	componentDidMount() {
		this.setState({ isLoading: true });
		util.ajax({
			url: '/FHADMINM/app/yuewen/getList.do',
			data: { ASKER: '小明同学',Going: 'yes' },
			cb: (res) => {
				this.rData = res.data;
				this.setState({
				    dataSource: this.state.dataSource.cloneWithRows(this.rData),
				    isLoading: false,
				});
			}
		});
	},
	
	onRecord(obj) {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(5,obj);
		}
	},
	
	render() {
		this.getRowRender = (data) => {
			return (rowData, sectionID, rowID) => {
		    	if (index < 0) {
		    		index = data.length - 1;
		    	}
		    	let obj = data[index--];
		    	return (
	    			<div className="row-container"
		    			key={rowID}
		    		>
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>
	    					{obj["TITILE"]}
		    				<br/>
		    				<a onClick={this.onRecord(obj)}>
		    					<img src="http://112.74.50.192/static/record_entry.png" width="160px" height="60px"/>
		    				</a>
	    				</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		};
		return this.getContent('Going');
	}
});

let Already = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	componentDidMount() {
		this.setState({ isLoading: true });
		util.ajax({
			url: '/FHADMINM/app/yuewen/getList.do',
			data: { ASKER: '小明同学',Already: 'yes' },
			cb: (res) => {
				this.rData = res.data;
				this.setState({
				    dataSource: this.state.dataSource.cloneWithRows(this.rData),
				    isLoading: false,
				});
			}
		});
	},
	
	onReplay(obj) {
		return (event) => {
			util.ajax({
				url: '/FHADMINM/app/yuewen/getRsById.do',
				data: obj,
				cb: (res) => {
					RongShang.replayURLRecording(res.data);
				}
			});
		}
	},
	
	render() {
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
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>
	    					{obj["TITILE"]}
	    					<br/>
		    				<a onClick={this.onReplay(obj)}>
		    					<img src="http://112.74.50.192/static/replay_entry.png" width="160px" height="60px"/>
		    				</a>
	    				</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		};
		return this.getContent('already');
	}
});

module.exports = React.createClass({
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
  	},
  	
  	getInitialState() {
		return {
			
		}
	},
	
	render() {
		return (
			<div>	
				<div style={{ fontSize:'larger',textAlign:'center' }}>待回答</div>
				<Going ref="going" entry={this.props.entry}/>
				<div style={{ fontSize:'larger',textAlign:'center' }}>已回答</div>
				<Already ref="already" entry={this.props.entry}/>
			</div>	
		);
	}
});