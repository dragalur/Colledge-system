import mongoose from 'mongoose';
import restify from 'restify';
import { addDepartment, addLector } from './controller/add.js';
import { getDepartments, getLectors } from './controller/data.js';
import {
  count,
  head,
  salary,
  search,
  statistic,
} from './controller/question.js';
import { cli } from './cli.js';

const server = restify.createServer({
  name: 'myapp',
});

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.l3jta.mongodb.net/colledge',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
//.then(() => console.log('db connect'));

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post('/lector', addLector);
server.post('/dep', addDepartment);
server.get('/api/head/:name', head);
server.get('/api/statistic/:name', statistic);
server.get('/api/salary/:name', salary);
server.get('/api/count/:name', count);
server.get('/api/search/:name', search);
server.get('/lectorAll', getLectors);
server.get('/depAll', getDepartments);

server.listen(8080, function () {
  // console.log('%s listening at %s', server.name, server.url);
  cli(server.url);
});
