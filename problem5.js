for (let naturalNumber = 1; ; naturalNumber++) {
  let flag = true;
  for (let divider = 1; divider <= 20; divider++) {
    if (naturalNumber % divider !== 0) {
      flag = false;
      break
    }
  }
  if (flag) {
    console.log(naturalNumber);
    break;
  }
}
