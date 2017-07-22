import test from 'ava';
import m from './';

test('fbdl.low()', async t => {
	const video = await m.low('https://www.facebook.com/9gag/videos/10155721204506840/');

	t.is(video.url, 'https://video.fpat1-1.fna.fbcdn.net/v/t42.1790-2/19039922_1693301384313061_670100479694340096_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&oh=4c485917d65858a3c6a781e06866eb80&oe=59730173');
});

test('fbdl.high()', async t => {
	const video = await m.high('https://www.facebook.com/9gag/videos/10155721204506840/');

	t.is(video.url, 'https://video.fpat1-1.fna.fbcdn.net/v/t43.1792-2/18919036_1344512015603295_1785854831970222080_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=7ab7a37cdadbb015e0af456fa7e1bb4e&oe=59730507');
});

