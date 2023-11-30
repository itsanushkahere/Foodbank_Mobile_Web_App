export const Ellipsis= (text, maxLength)=> {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }
  //