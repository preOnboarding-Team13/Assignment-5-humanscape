import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
