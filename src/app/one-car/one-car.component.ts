import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ICar } from '../interfaces/i-cars';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-car',
  templateUrl: './one-car.component.html',
  styleUrls: ['./one-car.component.css']
})
export class OneCarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private CarService: CarService) { 
    this.car = {
      id: 0,
      price: 0,
      carName: '',
      description: '',
      img: ''
    }
  }

  public car: ICar;

  public rented = false;

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    this.CarService.getAll().subscribe(data => {
      this.car = data.filter(car => car.id === parseInt(this.route.snapshot.params['id']))[0]
    })
  }

  rent() {
    this.rented = true
  }
}
