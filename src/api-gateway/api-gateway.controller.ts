import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('api-gateway')
@ApiBearerAuth()
@Controller()
@UseGuards(JwtAuthGuard)
export class ApiGatewayController {
  @Get()
  getApiInfo() {
    return {
      message: 'Task Management API Gateway',
      endpoints: {
        auth: {
          login: 'POST /auth/login',
          register: 'POST /auth/register',
        },
        tasks: {
          getAll: 'GET /tasks',
          create: 'POST /tasks',
          getOne: 'GET /tasks/:id',
          update: 'PUT /tasks/:id',
          delete: 'DELETE /tasks/:id',
        },
        users: {
          getAll: 'GET /users',
          create: 'POST /users',
          getOne: 'GET /users/:id',
          update: 'PUT /users/:id',
          delete: 'DELETE /users/:id',
        },
      },
    };
  }
}
