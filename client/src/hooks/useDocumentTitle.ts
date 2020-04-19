import { useEffect } from 'react';

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = !title ? 'Deezer Clone' : title;
  }, [title]);
};
