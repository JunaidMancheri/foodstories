import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreatePostDialogComponent } from '@food-stories/users-client/post/feature/create-post'
@Component({
  selector: 'fs-sidebar-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatDialogModule],
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.css'],
})
export class SidebarLayoutComponent {

  constructor(private matDialog: MatDialog) {}

  openCreateNewPostDialogBox() {
    this.matDialog.open(CreatePostDialogComponent, {panelClass: ''})
  }
}
