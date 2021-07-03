import { useEffect } from 'react';
import { NextPage } from 'next';

interface Props {
  cls: Array<string>;
}

const EmptyItems: NextPage<Props> = ({ cls }) => {
  useEffect(() => {
    const boxes = document.querySelectorAll<HTMLElement>('.item');
    let boxPerRow = 0;
    let blankRow = 0;

    function calculateBoxPerRow() {
      removeElementsByClass('empty-item');
      if (boxes.length > 1) {
        let i = 0;
        const total = boxes.length;
        const firstOffset = boxes[0].offsetTop;
        while (++i < total && boxes[i].offsetTop == firstOffset);
        boxPerRow = i; //first row
        if (total > boxPerRow) {
          blankRow = total % boxPerRow;
          if (blankRow < boxPerRow) {
            [...Array(blankRow)].map(() => {
              const pElement = document.getElementById('available');
              const cElement = document.createElement('div');
              cElement.classList.add(...cls);
              pElement?.appendChild(cElement);
            });
          }
        }
      }
    }

    function removeElementsByClass(className: string) {
      const elements = document.getElementsByClassName(className);
      while (elements.length > 0) {
        elements[0].parentNode?.removeChild(elements[0]);
      }
    }

    document.addEventListener('DOMContentLoaded', () => calculateBoxPerRow());
    window.onresize = calculateBoxPerRow;

    calculateBoxPerRow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};
export default EmptyItems;
