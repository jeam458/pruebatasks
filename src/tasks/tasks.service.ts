import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskFilterDto } from './dto/task-filter.dto';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const createdTask = new this.taskModel({
      ...createTaskDto,
      user: user._id,
    });
    return createdTask.save();
  }

  async findAll(filter: TaskFilterDto, user: User): Promise<Task[]> {
    const query: any = { user: user._id };

    if (filter.status) {
      query.status = filter.status;
    }

    if (filter.priority) {
      query.priority = filter.priority;
    }

    return this.taskModel.find(query).exec();
  }

  async findOne(id: string, user: User): Promise<Task> {
    return this.taskModel.findOne({ _id: id, user: user._id }).exec();
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
    user: User,
  ): Promise<Task> {
    return this.taskModel
      .findOneAndUpdate({ _id: id, user: user._id }, updateTaskDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string, user: User): Promise<Task> {
    return this.taskModel.findOneAndDelete({ _id: id, user: user._id }).exec();
  }
}
