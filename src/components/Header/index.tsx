import { useSelector } from 'react-redux';
import { selectMain } from '../../store/main/selectors';
import classNames from 'classnames';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { setPageActive } from '../../store/main/reducer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  {
    const dispatch: AppDispatch = useDispatch();
    const { pages, curPage } = useSelector(selectMain);

    const handleNavigation = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (pages[+e.target.value - 1].isReady) dispatch(setPageActive(e.target.value));
    };
    const navigate = useNavigate();
    useEffect(() => {
      navigate(pages[curPage].path);
    }, [curPage]);

    const tabsThumbs = pages.map((p, i) => {
      const thmbClass = classNames({
        tab: true,
        tab_active: i == curPage,
        tab_ready: i < curPage,
      });

      return (
        <li className={thmbClass} key={p.path}>
          <input
            type="radio"
            id={p.path}
            value={i}
            checked={curPage === i}
            className="tab__radio"
            name="tab"
            onChange={handleNavigation}
          ></input>
          <label htmlFor={p.path}>{i + 1}</label>
        </li>
      );
    });

    return (
      <header className="header">
        <input
          type="range"
          step={1}
          min={0}
          max={pages.length - 1}
          value={curPage || 0}
          className="header__bar"
          onChange={handleNavigation}
        ></input>
        <ul className="header__tabs">{tabsThumbs}</ul>
      </header>
    );
  }
};
