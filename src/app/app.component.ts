import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

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

  requestAirdrop = async (publicKey: string, quantity: number) => {
    // if (validateSolanaAddress(publicKey)) {
    const connection = new Connection('https://api.devnet.solana.com');
    await connection
      .requestAirdrop(new PublicKey(publicKey), quantity * LAMPORTS_PER_SOL)
      .then((data) => {
        console.log('Airdrop successful: ', data);
        // setShowsuccessModal(true);
      })
      .catch((e) => console.error('Airdrop failed!'));
    // } else {
    // }
  };

  onSubmit() {
    console.log('xx', this.solanaForm.value);
    this.requestAirdrop(
      this.solanaForm.value.publicKey as string,
      Number(this.solanaForm.value.quantity)
    );
  }
}
