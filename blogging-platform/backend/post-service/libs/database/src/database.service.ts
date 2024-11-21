import { Injectable } from '@nestjs/common';

export interface DatabaseService {
  /**
   * Read record.
   */
  get(...params: any[]): any;
  /**
   * Write record.
   */
  set(...params: any[]): any;
}

export interface DatabaseRecord {
  /**
   * Record id
   */
  id: any;
  /**
   * Record create time
   * https://en.wikipedia.org/wiki/Unix_time
   */
  createTimeUnix: any;
  /**
   * Record update time
   * https://en.wikipedia.org/wiki/Unix_time
   */
  updateTimeUnix: any;
}

@Injectable()
export class KeyValueDatabaseService implements DatabaseService {
  database: Record<string, any>;
  constructor() {
    this.database = {};
  }
  /**
   * Read record.
   */
  get(key: string): any {
    return this.database[key];
  }
  /**
   * Write record.
   */
  set(key: string, value: any): any {
    this.database[key] = value;
    return value;
  }
  /**
   * Read records.
   */
  getSome(): any {
    const keys = Object.keys(this.database);
    const records = keys.reduce((currentRecords, key, index) => {
      if (index > 10) return currentRecords;
      currentRecords.push(this.database[key]);
      return currentRecords;
    }, []);
    return records;
  }
}
