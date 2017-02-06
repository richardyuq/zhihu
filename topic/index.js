import React from 'react';
import ReactDOM from 'react-dom'; 
import ListView from '../common/listView.js';

module.exports = React.createClass({
	mixins: [ListView],
	
	setEntry: function(entry) {
    	this.entry = entry;
    },
	
	getInitialState() {
		return this.getContentInitialState();
	},
	
	render() {
		return this.getContent();
	}
});