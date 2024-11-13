const useModalWindowBodyScroll = (displayModal: boolean): void => {
  if (displayModal) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
};

export default useModalWindowBodyScroll;
