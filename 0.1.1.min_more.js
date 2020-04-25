
function min_more(a, b, c) {
  return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

  // if (a < b) {
  //   if (a < c) {
  //     return a;
  //   } else {
  //     return c;
  //   }
  // } else {
  //   if (b < c) {
  //     return b;
  //   } else {
  //     return c;
  //   }
  // }
}

module.exports = min_more;