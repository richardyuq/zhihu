import { ListView } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

let index = -1;
const NUM_ROWS = 20;
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
	
	getRowRender(data) {
		return (rowData, sectionID, rowID) => {
	    	if (index < 0) {
	    		index = data.length - 1;
	    	}
	    	const obj = data[index--];
	    	return (
	    		<div key={rowID}
	    			style={{
	    				padding: '0.08rem 0.16rem',
	    				backgroundColor: 'white',
	    			}}
	    		>
		    		<div style={{ display: '-webkit-box', display: 'flex' }}>
		    			<a onClick={this.onTitleClick(123)}>
		    				<img style={{ height: '1.28rem', marginTop: '0.2rem', marginRight: '0.12rem' }} src={obj.img} />
		    			</a>
		    			<div style={{ display: 'inline-block' }}>
		    				<p style={{ fontSize:'larger',marginBottom:'0',textAlign:'left' }}>
		    					<a onClick={this.onTitleClick(123)}>{obj.title}</a>
		    				</p>
		    				<p style={{ textAlign:'left',marginTop:'0.12rem' }}>{obj.des}</p>
		    			</div>
		    		</div>
	    		</div>
	    	);
	    };
	},
	
	getContent() {
		let data = this.getData();
		const separator = (sectionID, rowID) => (
			<div key={`${sectionID}-${rowID}`} style={{
			    backgroundColor: '#F5F5F9',
			    height: 8,
			    borderTop: '1px solid #ECECED',
			    borderBottom: '1px solid #ECECED',
			  }}
			/>
	    );
		let row = this.getRowRender(data);
		return (
			<div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
				<ListView ref="mainList"
					dataSource={this.state.dataSource}
		        	renderFooter={() => 
		        	<div style={{ padding: 30, textAlign: 'center' }}>
		        		{this.state.isLoading ? '加载中...' : '加载完毕'}
		        	</div>}
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