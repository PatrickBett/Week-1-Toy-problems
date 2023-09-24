function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  
  if (speed < speedLimit) {
    alert("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints >= 12) {
      alert("License suspended");
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
}


