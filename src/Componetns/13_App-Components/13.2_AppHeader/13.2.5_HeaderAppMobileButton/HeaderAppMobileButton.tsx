import './HeaderAppMobileButton.scss';
import { FC } from 'react';

interface IProps {
  mobileMenuState: boolean;
  setMobileMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderAppMobileButton: FC<IProps> = props => {
  const { mobileMenuState, setMobileMenuState } = props;

  let overlay = 'mobile-menu__overlay';
  let mobBtnSpanOne = 'mobile-menu__btn-line';
  let mobBtnSpanTwo = 'mobile-menu__btn-line';
  let mobBtnSpanThree = 'mobile-menu__btn-line';

  if (mobileMenuState) {
    overlay += ' mobile-menu__overlay-show';
    mobBtnSpanOne += ' mobile-menu__line-top';
    mobBtnSpanTwo += ' mobile-menu__line-central';
    mobBtnSpanThree += ' mobile-menu__line-bottom';
  }

  return (
    <>
      <div className={overlay} onClick={() => setMobileMenuState(mobileMenuState => !mobileMenuState)}></div>
      <button className="mobile-menu__btn " type="button" onClick={() => setMobileMenuState(mobileMenuState => !mobileMenuState)}>
        <span className={mobBtnSpanOne}></span>
        <span className={mobBtnSpanTwo}></span>
        <span className={mobBtnSpanThree}></span>
      </button>
    </>
  );
};

export default HeaderAppMobileButton;
