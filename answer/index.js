/**
 * Class Answer
 * 1、listen the answer
 * 2、list the other to be curious
 */
import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';
import { Button } from 'antd-mobile';

import "../common/question-row.css";
import data from '../common/data.js';

let index = -1;

module.exports = React.createClass({
	mixins: [ListView],
	
	propTypes: {
    	entry: React.PropTypes.object.isRequired,
    	param: React.PropTypes.object.isRequired
  	},
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	getData() {
		return data;
	},
	
	onListen(index) {
		return (event) => {
			if (!window.audio)  {
				window.audio = document.createElement("audio");
			}
			window.audio.src = data[index].audio;
			window.audio.play();
		}
	},
	
	onListen2(index) {
		return (event) => {
			if (!window.audio)  {
				window.audio = document.createElement("audio");
			}
			window.audio.src = data[index + 1].audio;
			window.audio.play();
		}
	},
	
	onAsk(index) {
		let entry = this.props.entry;
		return (event) => {
			entry.setFlag(2,{index: index});
		}
	},
	
	onStar() {
		return (event) => {
			let item = event.target;
			if (item.src.indexOf('useful2') > 0 )
				item.src = "http://112.74.50.192/static/home_useful.png";
			else
				item.src = "http://112.74.50.192/static/home_useful2.png";
		}
	},
	
	render() {
		let param = this.props.param,obj = data[param.index];
		this.getHeader = (data) => {
			return (
				<div className="row-container">
					<p className="float-line" style={{ marginTop:'.2rem',fontSize:'large' }}>
						<img src={obj.asker.icon} width="48px" height="48px" className="item answerer-icon"/>
						<span className="item len">{obj.asker.name}</span>
						<div style={{clear:'both'}}></div>
					</p>
					<p style={{ fontSize:'larger',marginTop: '0',marginBottom: '.2rem', paddingLeft:'1.3rem' }}>
						{obj.title}
					</p>
					<p className="float-line" style={{ paddingTop:'.2rem',fontSize:'large',borderTop: '1px solid rgb(213,213,213)' }}>
						<img src={obj.answerer.icon} width="48px" height="48px" className="item answerer-icon"/>
						<div style={{ float:'left',position: 'relative' }}>
							<span className="item">{obj.answerer.name}</span>
							<div style={{clear:'both'}}></div>
							<span className="item" style={{ color:'rgb(185,185,185)',fontSize:'x-small' }}>{obj.answerer.title}</span>
							<div style={{clear:'both'}}></div>
						</div>
						<div style={{clear:'both'}}></div>
					</p>
					<p className="float-line" style={{ marginTop:'.2rem',fontSize:'large', paddingLeft:'1.1rem' }}>
						<a onClick={this.onListen(param.index)}>	
							<img src="http://112.74.50.192/static/home_listen.png" width="230px" height="48px" className="item"/>
						</a>
    					<span className="item len">{obj.len}</span>
    					<img onClick={this.onStar()} src="http://112.74.50.192/static/home_useful.png" width="36px" height="36px" className="item" style={{ paddingTop: '0.1rem' }}/>
    					<div style={{clear:'both'}}></div>
					</p>
					<p className="float-line" style={{ color:'rgb(185,185,185)',fontSize:'x-small',marginTop: '0', paddingLeft:'1.3rem' }}>
						<span className="item">{obj.des}</span>
						<div style={{clear:'both'}}></div>
					</p>
					<div style={{ textAlign: 'center' }}>
						<Button type="primary" onClick={this.onAsk(param.index)} style={{ backgroundColor: 'rgb(0,191,173)', margin:'16px auto', width: '160px',padding: '0 16px' }}>
				        	向TA提问
				        </Button>
				    </div>
					<h3>
						听过这个问题的人还好奇
			        </h3>
				</div>
			);
		};
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
	    				<p style={{ fontSize:'larger',marginTop: '0.2rem' }}>{obj.title}</p>
	    				<p className="float-line">
	    					<img src={obj.answerer.icon} width="48px" height="48px" className="item answerer-icon"/>
	    					<a onClick={this.onListen2(index)}>	
								<img src="http://112.74.50.192/static/home_listen.png" width="230px" height="48px" className="item"/>
							</a>
	    					<span className="item len">{obj.len}</span>
	    					<img onClick={this.onStar()} src="http://112.74.50.192/static/home_useful.png" width="36px" height="36px" className="item" style={{ paddingTop: '0.1rem' }}/>
	    					<div style={{clear:'both'}}></div>
	    				</p>
	    				<p style={{ fontSize:'small',marginLeft: '0.1rem',marginTop: '0.1rem' }}>
	    					{obj.answerer.name}
	    				</p>
	    				<p className="float-line" style={{ color:'rgb(185,185,185)',fontSize:'x-small',marginTop: '0' }}>
	    					<span className="item">{obj.answerer.title}</span>	
	    					<span className="item" style={{float:'right'}}>{obj.des}</span>
	    					<div style={{clear:'both'}}></div>
	    				</p>
		    		</div>
		    	);
		    };
		};
		this.onEndReached = (event) => {
		}; 					
		return this.getContent();
	}
});