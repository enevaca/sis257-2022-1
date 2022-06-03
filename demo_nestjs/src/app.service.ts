import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'API Rest SIS257 en ejecución.';
  }
}
