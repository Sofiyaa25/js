function roadRadar(kmPerH, area) {
    let inTheSpeedLimit = true;
    let speedLimit;
  switch (area) {
    case `motorway`:
        speedLimit=130;
        if(kmPerH>130){
            inTheSpeedLimit=false;
        }
      break;
    case "interstate":
        speedLimit=90;
        if(kmPerH>90){
            inTheSpeedLimit=false;
        }
      break;
    case `city`:
        speedLimit=50;
        if(kmPerH>50){
            inTheSpeedLimit=false;
        }
      break;
    case `residential`:
        speedLimit = 20;
        if(kmPerH>20){
            inTheSpeedLimit=false;
        }
      break;
  }

  if(inTheSpeedLimit){
    console.log( `Driving ${kmPerH} km/h in a ${speedLimit} zone`);
  }else{

    let difference = kmPerH - speedLimit;
    let status="";

    if(difference>0 && difference<=20){
        status = "speeding";
    }else if(difference>20 && difference<=40){
        status="excessive speeding";
    }else{
        status="reckless driving"
    }
   
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)

  }
}
roadRadar(40, `city`);
roadRadar(21, 'residential');
roadRadar(120, 'interstate');