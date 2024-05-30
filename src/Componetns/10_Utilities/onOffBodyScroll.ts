const onOffBodyScroll = (action: string): void => {
  if (action == 'hidden') {
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${paddingRight}px`;
  }

  if (action == 'auto') {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
};

export default onOffBodyScroll;
