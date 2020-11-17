export class Animal {
  readonly name: string;
  private message = 'Lazy';

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters = 0): void {
    this.message = `${this.name} moved ${distanceInMeters}m.`;
  }

  poke(noise = 'Ouch!!'): void {
    console.log(noise);
  }

  display = () => console.log(`${this.message}`);
}
