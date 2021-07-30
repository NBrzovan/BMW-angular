import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ICar } from '../interfaces/i-cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private CarService: CarService) { }

  public cars: ICar[] = [];

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void {
    this.CarService.getAll().subscribe(data => this.cars = data.slice(0,4))
  }
}
