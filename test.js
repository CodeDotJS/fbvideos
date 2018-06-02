import test from 'ava';
import m from '.';

test('fbdl.low()', async t => {
	const video = await m.low('https://www.facebook.com/9gag/videos/10155721204506840/');

	t.is(video.url.split('?')[0], video.url.split('?')[0]);
});

test('fbdl.high()', async t => {
	const video = await m.high('https://www.facebook.com/9gag/videos/10155721204506840/');

	t.is(video.url.split('?')[0], video.url.split('?')[0]);
});

