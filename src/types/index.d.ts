declare interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
  
declare interface GridItem    {
  id: number,
  title: string,
  cols: number,
  rows: number,
  description: string,
  className: string,
  imgClassName: string,
  titleClassName: string,
  img: string,
  spareImg: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

declare interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: {title: string, path: string}[];
  link: string;
}

declare interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

declare interface Tech {
  id: number;
  name: string;
  img: string;
  nameImg: string;
  type: 'frontend' | 'backend' | 'others';
}

declare interface TitleHeader {
  title1: string;
  title2: string;
}