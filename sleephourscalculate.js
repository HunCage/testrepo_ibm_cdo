const getSleepHours = day => {
  if (day === 'monday') {
    return 4;
  } else if (day === 'tuesday') {
    return 2;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 9;
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('Perfect your sleep');
} else if (actualSleepHours > idealSleepHours) {
  console.log('more sleep than needed.');
} else {
  console.log('user should get some rest');
}

if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}

}
calculateSleepDebt();
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

console.log(getSleepHours('tuesday'));