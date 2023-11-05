import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from "../../../core/auth/model/user.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store";
import { logout } from "../../../core/auth/store/auth.actions";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() public toggleEmitter: EventEmitter<null> = new EventEmitter();
  public username: string | undefined;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.setUsername();
  }

  public setUsername(): void {
    const storedUserData: string | null = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUser: Partial<UserModel> = JSON.parse(storedUserData);
      this.username = parsedUser.username;
    }
  }

  public toggle(): void {
    this.toggleEmitter.emit(null);
  }

  public logout(): void {
    this.store.dispatch(logout());
  }

}
