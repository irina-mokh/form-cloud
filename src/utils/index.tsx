export const maskNumber = (v: string) => {
  const n = v.replace(/\D/g, '');
  const x = [n[0], n.slice(1, 4), n.slice(4, 7), n.slice(7, 9), n.slice(9)];

  let res = '';
  if (x?.length) {
    if (x[0]) res = '+' + x[0];
    if (x[1]) res = res + ' (' + x[1] + ') ';
    if (x[2]) res = res + x[2];
    if (x[3]) res = res + '-' + x[3];
    if (x[4]) res = res + '-' + x[4];
  }
  return res;
};
