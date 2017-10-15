import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { SwitchService } from "../switch.service";
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-switchgroup',
  templateUrl: './switchgroup.component.html',
  styleUrls: ['./switchgroup.component.css'],
  providers: [SwitchService]
})
export class SwitchgroupComponent implements OnInit {
  private TIMER: number = 10000;

  @Input() switchip: string;
  @Input() switchpin: number;
  @Input() fanip: string;
  @Input() fanpin: number;
  @Input() name: string;

  @Input() switchclass: string;
  @Input() fanclass: string;

  private service: SwitchService;
  private switchstatus: boolean;
  private fanstatus: boolean;
  private timer;

  constructor(switchService: SwitchService) {
    this.service = switchService;
  }

  ngOnInit() {
    this.checkSwitch();
    this.checkFan();
    this.switchclass = "fa fa-3x fa-power-off";
    this.fanclass = "fa fa-3x fa-gear";
    this.timer = Observable.timer(this.TIMER, this.TIMER);
    this.timer.subscribe(t => {
      this.checkSwitch();
      this.checkFan();
    });
  }

  public updateFan(status: boolean) {
    this.fanstatus = status;
    this.fanclass = "fa fa-3x fa-gear ";
    this.fanclass += this.fanstatus ? 'on' : 'off';
  }

  public checkFan(): void {
    this.service.checkStatus(this.fanip, this.fanpin).subscribe(data => {
      this.updateFan(data.status);
    },
      error => {
        console.error(error);
      });

  }

  public updateSwitch(status: boolean) {
    this.switchstatus = status;
    this.switchclass = "fa fa-3x fa-power-off ";
    this.switchclass += this.switchstatus ? 'on' : 'off';
  }

  public checkSwitch(): void {
    this.service.checkStatus(this.switchip, this.switchpin).subscribe(data => {
      this.updateSwitch(data.status);
    },
      error => {
        console.error(error);
      });

  }

  public toggleFan(): void {
    this.service.toggleStatus(this.fanip, this.fanpin).subscribe(data => {
      this.updateFan(data.status);
    },
      error => {
        console.error(error);
      })
  }

  public toggleSwitch(): void {
    this.service.toggleStatus(this.switchip, this.switchpin).subscribe(data => {
      this.updateSwitch(data.status);
    },
      error => {
        console.error(error);
      })
  }
}