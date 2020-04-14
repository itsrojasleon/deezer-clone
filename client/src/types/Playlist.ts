interface User {
  id: number;
  name: string;
}

export interface Playlist {
  id: number;
  title: string;
  picture_medium: string;
  creation_date: string;
  user: User;
}
