import { useCallback, useState } from 'react';

export const useHtmlElement = () => {
  const [width, setWidth] = useState();
  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const setRef = useCallback((node: HTMLElement) => {
    if (node) {
      const load = () => {
        setWidth(node.getBoundingClientRect().width);
      };
      window.addEventListener('load', load);

      return () => {
        window.removeEventListener('load', load);
      };
    }
  }, []);

  return [setRef, width];
};
