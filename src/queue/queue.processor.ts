import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('taskQueue')
export class QueueProcessor {
  @Process('taskJob')
  async handleTask(job: Job) {
    console.log(`Processing job with data:`, job.data);
    // Add your task handling logic here, like sending an email, processing data, etc.
  }
}
