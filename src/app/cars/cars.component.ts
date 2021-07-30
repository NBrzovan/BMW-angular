import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ICar } from '../interfaces/i-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private CarService: CarService) { }

  public cars: ICar[] = [];

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void {
    this.CarService.getAll().subscribe(data => this.cars = data)
  }
}
