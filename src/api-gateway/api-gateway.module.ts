import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports: [AuthModule, UsersModule, TasksModule],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
