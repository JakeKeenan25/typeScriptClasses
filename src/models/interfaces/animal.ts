import {Dog, Shark} from '../types';

export interface Animal {
  name: string;
  type: Dog | Shark;
}
