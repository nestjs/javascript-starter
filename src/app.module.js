import { Module } from '@nestjs/common';
import { ApplicationController } from './app.controller';

@Module({
  imports: [],
  controllers: [ApplicationController],
  components: [],
})
export class ApplicationModule {}
