import crypto = require('node:crypto');
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  static generateUuid(length: number = 36) {
    let uuid = '';
    for (let index = 0; index < length; index++) {
      if (index > 0 && index % 6 === 0) {
        uuid += '-';
        continue;
      }
      const value = crypto.randomInt(36);
      if (value < 26) {
        const asciiLetter = String.fromCharCode('a'.charCodeAt(0) + value);
        uuid += asciiLetter;
      } else {
        const asciiNumber = String.fromCharCode('0'.charCodeAt(0) + value);
        uuid += asciiNumber;
      }
    }
    return uuid;
  }
  static getUnixTime() {
    return Math.floor(Date.now() / 1000);
  }
}
