pointOne = {
    x: 1,
    y: 1,
}
pointTwo = {
    x: 2,
    y: 2,
}
lineOne = {
    start: {
        x: 1,
        y: 1
    },
    end: {
        x: 5,
        y: 10
    }
}
lineTwo = {
    start: {
        x: 1,
        y: 1
    },
    end: {
        x: 10,
        y: 1
    }
}
lineThree = {
    start: {
        x: 5,
        y: 10
    },
    end: {
        x: 10,
        y: 1
    }
}

const getDistance = function (startPoint, endPoint) {
    return Math.sqrt((startPoint.x - endPoint.x) ** 2 + (startPoint.y - endPoint.y) ** 2);
}

var segmentOneDist = getDistance(lineOne.start, lineOne.end)
var segmentTwoDist = getDistance(lineTwo.start, lineTwo.end)
var segmentThreeDist = getDistance(lineThree.start, lineThree.end)

const canFormTriangle = function (a, b, c) {
    return a + b > c || a + c > b || b + c > a;
}

console.log(getDistance(pointOne, pointTwo))
var triangle = canFormTriangle(segmentOneDist, segmentTwoDist, segmentThreeDist)
triangle ? console.log("triangle can be formed") : console.log("triangle cannot be formed")