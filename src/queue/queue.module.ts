import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
// import { QueueService } from './queue.service';
// import { QueueProcessor } from './queue.processor';
import { QueueService } from './queue.service';
import { QueueProcessor } from './queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'taskQueue', // Name of the queue
    }),
  ],
  providers: [QueueService, QueueProcessor],
  exports: [QueueService],
})
export class QueueModule {}
