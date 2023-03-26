import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Solana Airdrop';
  snackBarDuration = 5;
  progress = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  solanaForm = this.fb.group({
    publicKey: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  openSnackBar(airdropStatus: string, airdropResponse?: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { status: airdropStatus, message: airdropResponse },
      duration: this.snackBarDuration * 1000,
    });
  }

  requestAirdrop = async (publicKey: string, quantity: number) => {
    const connection = new Connection('https://api.devnet.solana.com');
    try {
      this.progress = !this.progress;
      await connection
        .requestAirdrop(new PublicKey(publicKey), quantity * LAMPORTS_PER_SOL)
        .then((data) => {
          console.log('Airdrop successful: ', data);
          this.openSnackBar('Success', data);
          this.progress = !this.progress;
        })
        .catch((err) => {
          console.error('Airdrop failed: ', err);
          this.openSnackBar('Failed');
          this.progress = !this.progress;
        });
    } catch (err) {
      this.progress = !this.progress;
      this.openSnackBar(err as string);
    }
  };

  onSubmit() {
    this.requestAirdrop(
      this.solanaForm.value.publicKey as string,
      Number(this.solanaForm.value.quantity)
    );
    this.solanaForm.reset();
  }
}
