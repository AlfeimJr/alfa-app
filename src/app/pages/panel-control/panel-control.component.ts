import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMe } from '../create/interface/user.interface';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnInit {
  user?: IMe
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user
  })
}

}
