export interface IMenu {
  id: number;
  name: string;
  icon: string;
  image: string;
  description: string;
  price: number;
}

export interface IFoodMenu {
  message: string;
  data: IMenu[];
}
