const addSpace = (str) => {
  return typeof str === 'string' && !!str ? ` ${str}` : '';
}

export default addSpace;
