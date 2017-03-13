import $ from 'jquery-ajax';
import $cookie from 'cookie-browser';

module.exports = {
	mergeTo: function(data1,data2) {
		function foundIn(title) {
			for (let i = 0; i < data1.length; i++) {
				if (data1[i] == title) {
					return true;
				}
			}
			return false;
		}
		for (let i = 0; i < data2.length; i++) {
			let obj = Object.assign({}, data1[0]),d = data2[i];
			let title = d["TITILE"];
			if (!foundIn(title)) {
				obj["title"] = title;
				obj["len"] = d["LEN"];
				obj["des"] = d["LISTENERS"] + "听过";
				obj["audio"] = "replay-" + d["QUESTION_ID"];
				obj["answerer"]["name"] = "小明同学";
				obj["answerer"]["title"] = "小明同学的头衔";
				data1.push(obj);
			}
		}
		return data1;
	},
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
	},
	setCookie: function(k,v) {
		$cookie.set(k, v);
	},
	getCookie: function(k) {
		return $cookie.get(k);
	}
}