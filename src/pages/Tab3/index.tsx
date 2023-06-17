import { useDispatch } from 'react-redux';
import { setPageActive, setPageReady } from '../../store/main/reducer';
import { useEffect } from 'react';
import { AppDispatch } from '../../store';

export const Tab3 = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageActive(2));
    dispatch(setPageReady(1));
  }, []);
  return <h2>Text Tab</h2>;
};
