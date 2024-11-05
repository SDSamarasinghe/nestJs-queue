import { Controller, Get } from '@nestjs/common';
import { QueueService } from './queue/queue.service';

@Controller()
export class AppController {
  constructor(private readonly queueService: QueueService) {}

  @Get('add-task')
  async addTask() {
    await this.queueService.addTask({ taskName: 'Sample Task' });
    return 'Task added to the queue';
  }
}
