const onOffBodyScroll = (action: 'hidden' | 'auto'): void => {

  if (action == 'hidden') {
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.background = 'red'
  }

  if (action == 'auto') {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';

    document.body.style.background = ''
  }

};

export default onOffBodyScroll;
