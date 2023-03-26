import { Component, Inject, inject, Input } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
  template: '{{ data }}',
})
export class SnackBarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { status: string; message: string }
  ) {}

  snackBarRef = inject(MatSnackBarRef);
}
