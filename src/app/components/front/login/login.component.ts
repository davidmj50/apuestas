import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public balotas: number[] = [];
  public superBalotas: number[] = [];
  public soloUnaVez: boolean = false;
  public balotasGanadoras: number[] = [];
  public superBalotaGanadora: number;
  public message: string;
  public message2: string;


  ngOnInit(): void {
    this.message = '';    
  }

  ganadora() {

      //llenar balotas
    for (let balota = 1; balota <= 43; balota++) {
      this.balotas.push(balota);
    }

    //llenar super balotas
    for (let superBalota = 1; superBalota <= 16; superBalota++) {
      this.superBalotas.push(superBalota); 
    }

    let n = 5;
    for (let balotaGanadora = 1; balotaGanadora <= n; balotaGanadora++) {
      let aleatorio = this.numeroAleatorio(1, 45) - 1;
      if (this.balotas[aleatorio] == undefined) {
        console.log('undefined indefinido');
        n++;
      } else {
        this.balotasGanadoras.push(this.balotas[aleatorio]);
        this.balotas.splice(aleatorio, 1);
      }
      console.log(aleatorio, this.balotas, this.balotasGanadoras);
    }

    this.superBalotaGanadora = this.superBalotas[this.numeroAleatorio(1, 16) - 1];

    this.soloUnaVez = !this.soloUnaVez;
    this.message = '';
    this.message2 = '';
  }

  numeroAleatorio(min, max): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
