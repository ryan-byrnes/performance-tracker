import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalRecordsModule } from './personal-records/personal-records.module';

@Module({
  imports: [PersonalRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
