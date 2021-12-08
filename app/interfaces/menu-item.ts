import { Serving } from './serving';

export interface MenuItem {
  id: number;
  title: string;
  imageUrl: string;
  serving: Serving;
}
