export type cardTypes = {
  id: string;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
};

export type headerProps = {
  showDropList: boolean;
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
};

export type contributersType = {
  name: string;
  github?: string;
  img: string;
  linkedin?: string;
  occupation: string;
  university?: string;
  universityLink?: string;
  age?: string | number;
};
