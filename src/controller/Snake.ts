import {Animal} from './index';

export class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }

  poke(noise = 'Hisssssss!!'): void {
    super.poke(noise);
  }
}
