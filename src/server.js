import 'dotenv/config';
import express from 'express';
import brain from './app/brain/router';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(brain.path, brain.router);
app.use('/admin/queues', BullBoard.UI);

app.listen(3000, () => {
  console.log('localhost:3000');
});