let fakeNumber = 10.0;
console.log(typeof(fakeNumber));

switch (fakeNumber){
  case 10.00:
    console.log("10.00");
    break;
    case 10:
    console.log("10");
    break;
    case 10.0:
    console.log("10.0");
    break;
  default:
    console.log("default");
}