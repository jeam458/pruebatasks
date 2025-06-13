import { DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_CONFIG = new DocumentBuilder()
  .setTitle('Task Management API')
  .setDescription('API for managing tasks with user authentication')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
