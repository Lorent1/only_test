import { useRef } from 'react';

export const useSpinner = () => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  return { spinnerRef };
};
