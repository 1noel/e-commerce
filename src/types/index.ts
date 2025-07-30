export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface MenuItems{
  id:number;
  name:string;
  icon:string;
  route:string;
  active:boolean;
  isOpen:boolean;
}