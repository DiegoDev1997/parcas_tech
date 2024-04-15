import React from 'react';
import { Button } from './styled';
import Arrowtop from '../../svgs/arrowtop';

export const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  return (
    <Button onClick={scrollToTop}>
      <Arrowtop />
    </Button>
  );
};

export default ScrollToTopButton;
