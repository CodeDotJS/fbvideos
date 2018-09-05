'use strict';

const got = require('got');

const msg = 'Either the video is deleted or it\'s not shared publicly!';

const lowResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('sd_src:"')[1].split('",hd_tag')[0];
		return {
			url: link
		};
	}).catch(error => {
		if (error) {
			error.message = msg;
		}
		return error.message;
	});
};

const highResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('hd_src:"')[1].split('",sd_src:"')[0];
		return {
			url: link
		};
	}).catch(error => {
		if (error) {
			error.message = msg;
		}
		return error.message;
	});
};

exports.low = lowResolution;
exports.high = highResolution;
