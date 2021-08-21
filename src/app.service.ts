import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, world!';
  }
  sayHello(): string {
	return 'Hello, NestJS!'
  }
}
