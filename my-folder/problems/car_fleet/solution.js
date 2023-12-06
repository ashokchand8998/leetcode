/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // going through decending position of cars to check if farther one ever croses the nearer one
    let carStack = [];
    let descCars = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => Number(b[0])-Number(a[0]));
    for (let i=0; i< descCars.length; i++) {
        if (carStack[0]) {
            let nearestCar = carStack[0];
            let nCarTargetTime = (target - nearestCar[0]) / nearestCar[1];
            let cCarTargetTime = (target - descCars[i][0]) / descCars[i][1]
            if (nCarTargetTime < cCarTargetTime)  {
                carStack.unshift(descCars[i]);
            }
        } else {
            carStack.unshift(descCars[i]);
        }
    }
    return carStack.length;
};