export interface Present {
  name: string;
  price: number;
  link: string;
}

export interface Guest {
  id: string;
  image: string;
  name: string;
  receiverId: string;
  presents: Present[];
}
