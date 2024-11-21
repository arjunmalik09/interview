import { Module } from '@nestjs/common';
import { KeyValueDatabaseService } from './database.service';

@Module({
  providers: [KeyValueDatabaseService],
  exports: [KeyValueDatabaseService],
})
export class DatabaseModule {}
