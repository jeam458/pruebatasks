import { IsEnum, IsOptional } from 'class-validator';
import { TaskPriority, TaskStatus } from '../schemas/task.schema';

export class TaskFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;
}
