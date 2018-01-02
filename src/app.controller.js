import { Get, Controller } from '@nestjs/common';

@Controller()
export class ApplicationController {
	@Get()
	root() {
    return 'Hello World!';
  }
}
