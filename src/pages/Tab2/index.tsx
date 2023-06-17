import { useEffect } from 'react';
import { NavBtnsBar } from '../../components/NavBtnsBar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setPageActive, setPageReady } from '../../store/main/reducer';

export const Tab2 = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageActive(1));
    dispatch(setPageReady(0));
  }, []);

  return (
    <h2>Details</h2>
    // <NavBtnsBar pathBack="/form/0" pathForward="/form/2" isValid={isValid} />
  );
};
