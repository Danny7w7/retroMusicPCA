import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  genres = [
    {
      title: 'Pop latino / Folk pop',
      image: 'https://imagenes.eltiempo.com/files/image_414_314/uploads/2020/03/13/5e6c460790e36.jpeg',
      description: 'El pop latino con influencias de folk y música alternativa es un estilo que combina melodías suaves, arreglos acústicos y letras introspectivas. Artistas como Julieta Venegas lo han popularizado al fusionar instrumentos tradicionales, como el acordeón, con sonidos modernos, generando un sello distintivo que conecta con audiencias de toda Hispanoamérica.'
    },
    {
      title: 'Pop rock / Rock latino',
      image: 'https://i.pinimg.com/736x/cb/08/a4/cb08a49025adca9ed004c7d2b88fd96c.jpg',
      description: 'El pop rock latino es un subgénero que fusiona la energía del rock con la accesibilidad melódica del pop, incorporando ritmos e instrumentos característicos de Latinoamérica. Maná ha sido uno de sus principales exponentes, logrando un sonido fresco que mezcla baladas románticas con temas de crítica social y ambiental.'
    },
    {
      title: 'Balada pop / Trova',
      image: 'https://i1.sndcdn.com/artworks-000317663007-slzxvg-t500x500.jpg',
      description: 'La balada pop con influencias de trova es un estilo centrado en la narrativa lírica y las historias personales, combinando melodías suaves con arreglos sencillos que resaltan la voz y el mensaje. Ricardo Arjona ha hecho de este género un medio para reflexionar sobre la vida, el amor y las problemáticas sociales, manteniendo un estilo poético y directo.'
    }
  ]
  constructor() {}
}