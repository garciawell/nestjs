import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {}

  getData() {
    console.log('Drawing watts for power');

    this.powerService.supplyPower(20);

    return 'DATA!!';
  }
}
