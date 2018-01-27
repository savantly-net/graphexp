import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Setting {
  id: string;
  value: any;

  constructor(value: any) {
    this.value = value;
  }
}

@Injectable()
export class SettingsService {

  value: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {  }

}
