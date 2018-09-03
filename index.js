'use strict';

const got = require('got');

const msg = 'Either the video is deleted or it\'s not shared publicly!';

const lowResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('sd_src:"')[1].split('",hd_tag')[0];
		return {
			url: link
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return err.message;
	});
};

const highResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('hd_src:"')[1].split('",sd_src:"')[0];
		return {
			url: link
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return err.message;
	});
};

exports.low = lowResolution;
exports.high = highResolution;
