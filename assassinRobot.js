
// example of harmful =

exterminate_humans_flag = false;

const killHumans = (command) => {
  if (command === true) {  // this is a harmful assignment
    return "exterminate ! Kill them all!";
  } else {
    return "protect";
  }
};

console.log(killHumans(exterminate_humans_flag));
