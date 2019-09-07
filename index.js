// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    let blocks_from = 0;
    if (x <= 42) {
        blocks_from = 42 - x;

    } else { 
        blocks_from = x - 42;
    }
    return blocks_from;
}

function distanceFromHqInFeet(x) {
    let feet_from = 0;
    feet_from = distanceFromHqInBlocks(x) * 264;
    return feet_from;
}

function distanceTravelledInFeet(x, y) {
    let travel_distance = 0;
    travel_distance = x - y;
    if (travel_distance < 0) {
        travel_distance = (travel_distance * -1) * 264;
        
    } else {
        travel_distance = travel_distance * 264;
    }
    return travel_distance;

}

function calculatesFarePrice(x, y) {
    let fare = 0;
    let message = "";
    let feet = distanceTravelledInFeet(x, y);
    if (feet <=400) {
        fare = 0;
    } else if (feet > 400 && feet <= 2000) {
        feet = feet - 400;
        fare = feet * 0.02;
    } else if (feet > 2000 && feet < 2500) {
        fare = 25;
    } else {
        message = "cannot travel that far";
        return message;
    }
    return fare;


}