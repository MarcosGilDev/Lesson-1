import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-lesson',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage, CommonModule],
  templateUrl: './first-lesson.component.html',
  styleUrl: './first-lesson.component.css'
})
export class FirstLessonComponent {

  //Definicion de variables datos personales
  public nombre: string = '';
  public apellidos: string = ''; 
  public edad: number = 0;
  public aprendiendo: boolean = false;
  public nombreLabel: string = 'Nombre';
  public apellidosLabel: string = 'Apellidos';
  public edadLabel: string = 'Edad';
  public aprendiendoLabel: string = 'Aprendiendo Programación';
  public noValores: string = 'No hay valores';

  //Definición de variables operaciones
  public operanteSuma1: number = 0;
  public operanteSuma2: number = 0;
  public operanteResta1: number = 0;
  public operanteResta2: number = 0;
  public operanteMultiplicacion1: number = 0;
  public operanteMultiplicacion2: number = 0;
  public operanteDivision1: number = 0;
  public operanteDivision2: number = 0;


  constructor(){}

  public sumar(){
    return 'Hacer operación';
  }

  public restar(){
    return 'Hacer operación';
  }

  public multiplicar(){
    return 'Hacer operación';
  }

  public dividir(){
    return 'Hacer operación';
  }


}
