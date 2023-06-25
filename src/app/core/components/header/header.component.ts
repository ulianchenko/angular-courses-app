import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user?: UserEntity;
  @Input() isAuth: boolean = false;
  @Output() logoutClicked = new EventEmitter();

  onClickLogOut() {
    this.logoutClicked.emit();
  }
}
