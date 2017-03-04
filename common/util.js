import $ from 'jquery-ajax';

module.exports = {
	ajax: function(obj) {
		$.ajax({
	        url: obj.url,
	        type: 'POST',
	        dataType: 'json',
	        data: obj.data,
	        error: function(data) {
	        	if (obj.cb["fail"]) {
	        		obj.cb["fail"]();
	        	} else {
	        		console.error('错误','系统异常，请稍后再试');
	        	}
	        },
	        success: function(res) {
	        	if (res.success) {
	            	typeof(obj.cb) == 'function' ? obj.cb(res) : obj.cb["success"](res);
	            } else {
	            	if (obj.cb["fail"]) {
	            		obj.cb["fail"](res);
	            	} else {
	            		console.error('错误','系统异常，请稍后再试');
	            	}
	            }
	        }
	    });
	}
}