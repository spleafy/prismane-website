export interface AuthorType {
  id: number;
  name: string;
  handle: string;
  picture: string;
}

const authors: AuthorType[] = [
  {
    id: 1,
    name: 'Martin Petrov',
    handle: 'martindaone',
    picture: '/authors/martin_petrov.jpg'
  }
];

export default authors;
