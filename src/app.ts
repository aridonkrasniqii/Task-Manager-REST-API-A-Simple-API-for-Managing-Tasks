import express from 'express';
import bodyParser from 'body-parser';
import taskRouter from './routes/TaskRoute';
import groupRouter from './routes/GroupRoute';
import userRouter from './routes/UserRoute';

const server = express();

server.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

server.use('/tasks', taskRouter);
server.use('/groups', groupRouter);
server.use('/users', userRouter);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
