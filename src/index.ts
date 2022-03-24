import http from 'http';

const server = http.createServer((_req, res) => {
	res.write('hello world');
	res.end();
});

server.listen(3000, () => {
	console.log('app running two three');
});
