import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMe } from '../create/interface/user.interface';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user?: IMe
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user
    })
    console.log(this.user);

  }
  logout(){
    this.userService.deslogar();
  }
}
