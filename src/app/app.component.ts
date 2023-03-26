import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Solana Airdrop';

  constructor(private fb: FormBuilder) {}

  solanaForm = this.fb.group({
    publicKey: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  onSubmit() {
    console.log('xx', this.solanaForm.value);
  }
}
