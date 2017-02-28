/**
 * Class ListView
 * Abstract for mixin
 */
import { ListView } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

let index = -1;
const NUM_ROWS = 3;
let pageIndex = 0;

module.exports = {
		
	getContentInitialState() {
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		});

	    this.genData = (pIndex = 0) => {
	    	const dataBlob = {};
	    	for (let i = 0; i < NUM_ROWS; i++) {
	    		const ii = (pIndex * NUM_ROWS) + i;
	    		dataBlob[`${ii}`] = `row - ${ii}`;
	    	}
	    	return dataBlob;
	    };
		
	    this.rData = this.genData();
	    return {
	    	dataSource: dataSource.cloneWithRows(this.rData),
	        isLoading: false
	    };
	},
	
	onEndReached(event) {
		// load new data
		this.setState({ isLoading: true });
		setTimeout(() => {
			this.rData = { ...this.rData, ...this.genData(++pageIndex) };
			this.setState({
			    dataSource: this.state.dataSource.cloneWithRows(this.rData),
			    isLoading: false,
			});
		}, 1000);
	},
	
	/**
	 * not implemented
	 */
	getRowRender(data) {
		return null;
	},
	
	/**
	 * not implemented
	 */
	getHeader(data) {
		return null;
	},
	
	/**
	 * not implemented
	 */
	getFooter(data) {
		return null;
	},
	
	getContent(key) {
		let refName = key ? ('mainList-' + key) : 'mainList';
		//not implemented
		let data = this.getData();
		
		const separator = (sectionID, rowID) => (
			<div key={`${sectionID}-${rowID}`} style={{
			    backgroundColor: '#F5F5F9',
			    height: 1,
			    borderTop: '0px solid #ECECED',
			    borderBottom: '1px solid rgb(213,213,213)',
			  }}
			/>
	    );
		
		/**
		 * not implemented
		 */
		let row = this.getRowRender(data);
		let header = this.getHeader(data);
		let footer = this.getFooter(data);
		return (
			<div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
				{header}
				<ListView ref={refName}
					dataSource={this.state.dataSource}
		        	renderFooter={footer || (() => 
		        	<div style={{ padding: 30, textAlign: 'center' }}>
		        		{this.state.isLoading ? '加载中...' : '加载完毕'}
		        	</div>)}
		        	renderRow={row}
		        	renderSeparator={separator}
		        	className="am-list"
		        	pageSize={4}
		        	scrollRenderAheadDistance={500}
		        	scrollEventThrottle={20}
		        	//onScroll={() => { console.log('scroll'); }}
		        	useBodyScroll
		        	onEndReached={this.onEndReached}
		        	onEndReachedThreshold={10}
				/>
			</div>
		);
	}
}