const defaultSpeed = 70;
let point = 0;

checkSpeed(93);

function checkSpeed(speed) {
  if (speed !== defaultSpeed) {
    if (speed - defaultSpeed > 1) {
      const pointR = Math.floor((speed - defaultSpeed) / 5);
      point = pointR;
      if (pointR >= 12) {
        console.log("Guvohnoma olib qo'yiladi");
      } else {
        console.log("point --->", point);
      }
    }
  }
}
