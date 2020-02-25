import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = !title ? 'Deezer Clone' : title;
  }, [title]);
};
