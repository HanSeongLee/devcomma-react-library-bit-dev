import { useContext } from 'react';
import { ResponsiveContext } from './responsive-context';

export const useResponsive = () => useContext(ResponsiveContext);
