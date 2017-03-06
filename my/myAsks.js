/**
 * Class My Asks
 * function:
 * 1、My asks question list
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listViewAync.js';

import util from '../common/util.js';
import "../common/question-row.css";

let index = -1;

module.exports = React.createClass({
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
			data: { ASKER:'小明同学' },
			cb: (res) => {
				this.rData = res.data;
				this.setState({
				    dataSource: this.state.dataSource.cloneWithRows(this.rData),
				    isLoading: false,
				});
			}
		});
	},
	
	onAsk() {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(3,{index: 3});
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
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>{obj["TITILE"]}</p>
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
					去提问
				</a>
			</div>;
		}
		return this.getContent();
	}
});