//地图1(map1)
var array1 = [
	[19, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  31],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  20, 10, 10, 20, 10, 7,  7,  7,  7,  7,  7,  7,  21],
	[1,  4, 7,  7,  7,  7,  2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  20, 9,  9,  9,  7,  2],
	[1,  7, 7,  2,  20, 2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  2,  2,  2,  2,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 20, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  20, 11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 1,  4,  1],
	[2,  7, 7,  26, 7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  4,  1],
	[2,  7, 28, 22, 0,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  4,  1],
	[2,  7, 27, 0,  29, 7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  4,  1],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[2,  2, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  20]
];

//地图2(map2)
var array2 = [
	[31, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  32],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  0],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  4,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[21, 7, 0,  2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  21, 3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[22, 7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  20, 20, 8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  22, 7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  1,  1,  4],
	[2,  7, 1,  1,  1,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 1,  30, 1,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  1,  1],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[2,  2, 21, 2,  2,  20, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图3(map3)
var array3 = [
	[32, 1, 1,  1,  1,  1,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  2],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[2,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  21, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[21, 7, 21, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  31],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  23, 3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  22, 22, 8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  2,  7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  1,  1,  4],
	[2,  7, 2,  2,  0,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 2,  0,  2,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[2,  2, 2,  2,  2,  2,  2,  2,  2,  2,  2,  20, 21, 2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图4(map4)
var array4 = [
	[32, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  31],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  21, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 21, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  22, 2,  2,  3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 30, 0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  1,  4],
	[2,  7, 7,  26, 7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  1,  4],
	[2,  7, 28, 23, 2,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 27, 0,  29, 7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
	[2,  2, 2,  2,  2,  2,  2,  2,  2,  22, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

// 地图5(map5)
var array5 = [
	[32, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  31],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  22, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 22, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  7,  7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  1,  1],
	[2,  7, 5,  5,  5,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 6,  6,  6,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[2,  2, 2,  2,  2,  2,  2,  22, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图6(map6)
var array6 = [
    [31, 1, 1,  1,  1,  1,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  32],
    [1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
    [2,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
    [1,  7, 7,  2,  21, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
    [1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
    [2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
    [24, 7, 21, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  3],
    [2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  21, 3,  3,  7],
    [2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
    [2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
    [2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
    [2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  23, 23, 8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
    [2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
    [2,  7, 7,  2,  7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  1,  1],
    [2,  7, 2,  2,  0,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
    [2,  7, 2,  0,  2,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  1,  4],
    [2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
    [2,  2, 2,  2,  2,  2,  2,  2,  2,  2,  2,  20, 22, 2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图7(map7)
var array7 = [
	[32, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  31],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  20, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 20, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  26, 7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  1,  1,  4],
	[2,  7, 28, 24, 30, 7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  4,  1],
	[2,  7, 27, 0,  30, 7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  4,  1],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  4,  1],
	[2,  2, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图8(map8)
var array8 = [
	[31, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  32],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  20, 2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[26, 7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 20, 2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  3,  2,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  24, 7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  1,  4],
	[2,  7, 5,  30, 5,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 6,  5,  6,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  1,  4],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[30, 2, 2,  2,  26, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

//地图9(map9)
var array9 = [
	[32, 1, 1,  1,  1,  4,  1,  2,  2,  7,  7,  7,  7,  10, 10, 10, 7,  2,  2,  2,  2,  10],
	[1,  2, 4,  4,  4,  7,  7,  7,  7,  0,  10, 10, 0,  10, 7,  7,  7,  7,  7,  7,  7,  2],
	[1,  4, 7,  7,  7,  7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  9,  9,  7,  2],
	[1,  7, 7,  2,  4,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  13, 13, 13, 9,  9,  7,  2],
	[1,  7, 2,  2,  13, 13, 13, 2,  2,  0,  0,  0,  0,  0,  0,  18, 15, 16, 17, 2,  7,  2],
	[2,  7, 2,  2,  14, 15, 16, 17, 0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  2,  3,  7,  2],
	[2,  7, 4,  2,  2,  2,  2,  2,  2,  0,  0,  25, 0,  0,  0,  0,  2,  2,  2,  7,  3,  2],
	[2,  7, 13, 13, 2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2,  3,  3,  7],
	[2,  7, 16, 15, 17, 2,  2,  1,  1,  2,  0,  0,  0,  1,  1,  11, 2,  11, 1,  3,  4,  2],
	[2,  7, 2,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  4,  11, 12, 0,  0,  11, 7,  3,  2],
	[2,  7, 2,  2,  2,  13, 13, 1,  1,  10, 10, 10, 10, 4,  5,  5,  5,  5,  5,  4,  7,  2],
	[2,  7, 2,  2,  2,  15, 16, 17, 7,  8,  0,  0,  8,  7,  7,  6,  6,  6,  7,  7,  7,  2],
	[2,  7, 0,  0,  2,  2,  2,  2,  7,  10, 0,  0,  0,  1,  11, 6,  6,  6,  11, 4,  4,  4],
	[2,  7, 7,  4,  7,  2,  2,  2,  10, 10, 0,  0,  0,  1,  5,  6,  6,  6,  5,  4,  1,  4],
	[2,  7, 4,  4,  4,  7,  2,  2,  10, 10, 0,  0,  0,  1,  1,  1,  1,  1,  1,  4,  4,  4],
	[2,  7, 4,  4,  4,  7,  7,  2,  10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
	[2,  7, 7,  7,  7,  7,  7,  10, 10, 10, 0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
	[2,  2, 2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
];

var arrays = [array1,array2,array3,array4,array5,array6,array7,array8,array9];//地图(map)
var mapnum = 0;//地图下标
var array = arrays[mapnum];//当前地图
var map = document.getElementById("map");//地图框
var mapwidth = parseInt(map.style.width);
var mapheight = parseInt(map.style.height);
var x = 0;//数组建立坐标轴，数组下标为横纵坐标
var y = 0;
var Rebana = new Characters(50,30,10,0,1);//创建人物
var monster1 = new Characters(50,20,10,40,1);
var monster2 = new Characters(150,50,40,100,3);
var monster3 = new Characters(300,100,90,400,7);
var boss1 = new Characters(500,150,100,800,10);
var boss2 = new Characters(1000,200,150,2000,14);
var finalboss = new Characters(5000,500,400,10000,20);

var rebanalv = document.getElementById("rebanalv");//主角等级
rebanalv.innerHTML = Rebana.LV;
var rebanahp = document.getElementById("rebanahp");//主角血量
rebanahp.innerHTML = Rebana.HP;
var rebanaat = document.getElementById("rebanaat");//主角攻击
rebanaat.innerHTML = Rebana.AT;
var rebanade = document.getElementById("rebanade");//主角防御
rebanade.innerHTML = Rebana.DE;
var rebanaexp = document.getElementById("rebanaexp");//主角目前经验值
rebanaexp.innerHTML = Rebana.EXP;
var levelupExp = document.getElementById("levelUpExp");//主角升级所需经验值
var needExp = 100;
levelupExp.innerHTML = needExp;

var keys =document.getElementById("keys");
var keynum = 0;//钥匙数量
keys.innerHTML = keynum;

var nextValue;//全局变量，保存将要移动到的下一个数组元素的值

createMap(array);//二位数组创建地图
tomove(array);

//创建地图
function createMap(array) {
	map.innerHTML = "";
	for(var i = 0,len1 = array.length;i<len1;i++){
		for (var j = 0,len2 = array[i].length; j < len2;j++) {
			var maplattice = document.createElement("div");
			maplattice.style.height = mapheight/len1 + "px";
			maplattice.style.width = mapwidth/len2 + "px";
			maplattice.style.float = "left";
			maplattice.style.backgroundSize = "100% 100%";
			switch (array[i][j]) {
				case 0:
					maplattice.style.backgroundImage = "";
					map.appendChild(maplattice);
					break;
				case 1://草地
					maplattice.style.backgroundImage = "url(./img/terrain/grass_01.jpg)";
					map.appendChild(maplattice);
					break;
				case 2://绿地
					maplattice.style.backgroundImage = "url(./img/terrain/green_road.jpg)";
					map.appendChild(maplattice);
					break;
				case 3://泥地
					maplattice.style.backgroundImage = "url(./img/terrain/muddy_road.jpg)";
					map.appendChild(maplattice);
					break;
				case 4://树
					maplattice.style.backgroundImage = "url(./img/terrain/tree_01.jpg)";
					map.appendChild(maplattice);
					break;
				case 5://水、浪
					maplattice.style.backgroundImage = "url(./img/terrain/water_01.jpg)";
					map.appendChild(maplattice);
					break;
				case 6://水
					maplattice.style.backgroundImage = "url(./img/terrain/water_02.jpg)";
					map.appendChild(maplattice);
					break;
				case 7://栅栏
					maplattice.style.backgroundImage = "url(./img/terrain/bar_01.jpg)";
					map.appendChild(maplattice);
					break;
				case 8://大树桩
					maplattice.style.backgroundImage = "url(./img/terrain/big_tree_stump.jpg)";
					map.appendChild(maplattice);
					break;
				case 9://十字架
					maplattice.style.backgroundImage = "url(./img/terrain/cross.jpg)";
					map.appendChild(maplattice);
					break;
				case 10://石头
					maplattice.style.backgroundImage = "url(./img/terrain/stone.jpg)";
					map.appendChild(maplattice);
					break;
				case 11://悬崖
					maplattice.style.backgroundImage = "url(./img/terrain/cliff.jpg)";
					map.appendChild(maplattice);
					break;
				case 12://阴影沙地
					maplattice.style.backgroundImage = "url(./img/terrain/shadow_saddy_road.jpg)";
					map.appendChild(maplattice);
					break;
				case 13://玻璃
					maplattice.style.backgroundImage = "url(./img/building/glass.jpg)";
					map.appendChild(maplattice);
					break;
				case 14://人
					maplattice.style.backgroundImage = "url(./img/building/human.jpg)";
					map.appendChild(maplattice);
					break;
				case 15://出口
					maplattice.style.backgroundImage = "url(./img/building/export.jpg)";
					map.appendChild(maplattice);
					break;
				case 16://装饰
					maplattice.style.backgroundImage = "url(./img/building/decoration.jpg)";
					map.appendChild(maplattice);
					break;
				case 17://阴影草地
					maplattice.style.backgroundImage = "url(./img/terrain/shadow_green_road.jpg)";
					map.appendChild(maplattice);
					break;
				case 18://宾馆
					maplattice.style.backgroundImage = "url(./img/building/inn.jpg)";
					map.appendChild(maplattice);
					break;
				case 19://主角雷班纳
					maplattice.style.backgroundImage = "url(./img/characters/rebana.png)";
					map.appendChild(maplattice);
					break;
				case 20://怪物1
					maplattice.style.backgroundImage = "url(./img/characters/monster1.png)";
					map.appendChild(maplattice);
					break;
				case 21://怪物2
					maplattice.style.backgroundImage = "url(./img/characters/monster2.png)";
					map.appendChild(maplattice);
					break;
				case 22://怪物3
					maplattice.style.backgroundImage = "url(./img/characters/monster3.png)";
					map.appendChild(maplattice);
					break;
				case 23://boss1
					maplattice.style.backgroundImage = "url(./img/characters/boss1.png)";
					map.appendChild(maplattice);
					break;
				case 24://boss2
					maplattice.style.backgroundImage = "url(./img/characters/boss2.png)";
					map.appendChild(maplattice);
					break;
				case 25://boss3
					maplattice.style.backgroundImage = "url(./img/characters/boss3.png)";
					map.appendChild(maplattice);
					break;
				case 26://门
					maplattice.style.backgroundImage = "url(./img/building/door.jpg)";
					map.appendChild(maplattice);
					break;
				case 27://血瓶
					maplattice.style.backgroundImage = "url(./img/things/blood.jpg)";
					map.appendChild(maplattice);
					break;
				case 28://防御
					maplattice.style.backgroundImage = "url(./img/things/shield.jpg)";
					map.appendChild(maplattice);
					break;
				case 29://攻击
					maplattice.style.backgroundImage = "url(./img/things/attack.jpg)";
					map.appendChild(maplattice);
					break;
				case 30://钥匙
					maplattice.style.backgroundImage = "url(./img/things/key.png)";
					map.appendChild(maplattice);
					break;
				case 31://上楼
					maplattice.style.backgroundImage = "url(./img/terrain/upstairs.png)";
					map.appendChild(maplattice);
					break;
				case 32://下楼
					maplattice.style.backgroundImage = "url(./img/terrain/downstairs.png)";
					map.appendChild(maplattice);
					break;
			}
			
		}
	}
}

//人物
function Characters(HP,AT,DE,EXP,LV){
	this.HP = HP;
	this.AT = AT;
	this.DE = DE;
	this.EXP = EXP;
	this.LV = LV;
}


//封装上下左右移动
function mapClear(array,xMoveType,yMoveType){
    var xNow;
    var yNow;//现在的坐标
    var beforeValue = nextValue;
    switch (xMoveType) {
        case 0://左移
            xNow = x-1;
            yNow = y;
            break;
        case 1://右移
            xNow = x+1;
            yNow =y;
            break;
        case 2://上下移动
            xNow = x;
            if (yMoveType == 0) {//上移
                yNow = y-1;
            }else if (yMoveType == 1) {//下移
                yNow = y+1;
            }
            break;
    }
    nextValue = array[yNow][xNow];//将要移动到的位置的值
    array[yNow][xNow] = array[y][x];
    if (beforeValue == undefined) {//是否是第一次移动
		array[y][x] = 2;
    }else {
        array[y][x] = beforeValue;//人物移动后，将地形背景还原
    }
    x = xNow;//人物现在的坐标
    y = yNow;
    createMap(array);
}


//战斗结算
function battleClear(monsters){
    if (parseInt(monsters.AT - Rebana.DE)*1.1 <= 0){
    }else {
        Rebana.HP -= parseInt((monsters.AT - Rebana.DE)*1.1);
    }
    if (Rebana.HP <= 0) {//主角死亡，重新开始
        alert("You Die! Game Over");
        window.location.reload();
    }else {
        Rebana.EXP += monsters.EXP;
    }
    if (Rebana.EXP >= needExp){
        Rebana.LV++;
        Rebana.HP += 100;
        Rebana.AT += 12;
        Rebana.DE += 6;
        needExp = parseInt(needExp*1.2);
        Rebana.EXP = 0;
    }
	levelupExp.innerHTML = needExp;
    rebanalv.innerHTML = Rebana.LV;
    rebanahp.innerHTML = Rebana.HP;
    rebanaat.innerHTML = Rebana.AT;
    rebanade.innerHTML = Rebana.DE;
    rebanaexp.innerHTML = Rebana.EXP;
}

//怪物类型
function battle(array,xNow,yNow,xMoveType,yMoveType){
    switch(array[yNow][xNow]){
        case 20:
            array[yNow][xNow] = 0;
            battleClear(monster1);
            break;
        case 21:
            array[yNow][xNow] = 0;
            battleClear(monster2);
            break;
        case 22:
            array[yNow][xNow] = 0;
            battleClear(monster3);
            break;
        case 23:
            array[yNow][xNow] = 0;
            battleClear(boss1);
            break;
        case 24:
            array[yNow][xNow] = 0;
            battleClear(boss2);
            break;
        case 25:
            array[yNow][xNow] = 0;
            battleClear(finalboss);
            break;
    }
    mapClear(array,xMoveType,yMoveType);//重载地图
}


//道具、开门、传送
function toolsTransform(array,xNow,yNow){
    switch(array[yNow][xNow]){
        case 26://门
            if(keynum == 0){
            	alert("钥匙数量不足！")
			}else {
                array[yNow][xNow] = 0;
            	keynum--;
            	keys.innerHTML = keynum;
			}
            break;
        case 27://血瓶
            array[yNow][xNow] = 0;
            Rebana.HP += 40;
            rebanahp.innerHTML = Rebana.HP;
            break;
        case 28://防御
            array[yNow][xNow] = 0;
            Rebana.DE += 10;
            rebanade.innerHTML = Rebana.DE;
            break;
        case 29://攻击
            array[yNow][xNow] = 0;
            Rebana.AT += 30;
            rebanaat.innerHTML = Rebana.AT;
            break;
        case 30://钥匙
            array[yNow][xNow] = 0;
            keynum++;
            keys.innerHTML = keynum;
            break;
        case 31://上楼
            for (var i = 0;i < array.length;i++){
                for (var j =0;j < array[i].length;j++){
                    if(array[i][j] == 19){
                        x=j;
                        y=i;
                    }
                }
            }
            mapnum++;
            var newArray = arrays[mapnum];//当前地图
            newArray[y][x] = 19;
            createMap(newArray);
            break;
        case 32://下楼
            for (var i = 0;i < array.length;i++){
                for (var j =0;j < array[i].length;j++){
                    if(array[i][j] == 19){
                        x=j;
                        y=i;
                    }
                }
            }
            mapnum--;
            var newArray = arrays[mapnum];//当前地图
            newArray[y][x] = 19;
            createMap(newArray);
            break;
    }
}


//操作
function compare(keycode,array){
	var xNow;
	var yNow;
	var xMoveType;
    array = arrays[mapnum];
	switch(keycode){
		case 37://左移
			xNow = x-1;
			yNow = y;
			xMoveType = 0;
			yMoveType = 2;
			break;
		case 38://上移
			xNow = x;
			yNow = y - 1;
			xMoveType = 2;
			yMoveType = 0;
			break;
		case 39://右移
			xNow = x + 1;
			yNow = y;
			xMoveType = 1;
			yMoveType = 2;
			break;
		case 40://下移
			xNow = x;
			yNow = y + 1;
			xMoveType = 2;
			yMoveType = 1;
			break;
	}

    if (array[yNow][xNow] ==0 || array[yNow][xNow] ==1 || array[yNow][xNow] ==2 ||
		array[yNow][xNow] ==3 || array[yNow][xNow] ==10 || array[yNow][xNow] ==12 ||
		array[yNow][xNow] ==17) {//能穿过的地形
        mapClear(array,xMoveType,yMoveType);
    }else if (array[yNow][xNow] == 20 || array[yNow][xNow] == 21 || array[yNow][xNow] == 22 ||
        array[yNow][xNow] == 23 || array[yNow][xNow] == 24 || array[yNow][xNow] == 25){
        battle(array,xNow,yNow,xMoveType,yMoveType);
	}else if (array[yNow][xNow] == 27 || array[yNow][xNow] == 28 || array[yNow][xNow] == 29 ||
		array[yNow][xNow] == 30){
        toolsTransform(array,xNow,yNow);
        mapClear(array,xMoveType,yMoveType);//重载地图
	}else if (array[yNow][xNow] == 26){//开门
        toolsTransform(array,xNow,yNow);
	}else if (array[yNow][xNow] == 31){//上楼
        toolsTransform(array,xNow,yNow);
	}else if (array[yNow][xNow] == 32){//下楼
        toolsTransform(array,xNow,yNow);
    }else {//其它地形

    }
}

//键盘控制人物移动
function tomove(array){
	window.onkeydown = function(e){
		var keycode = e.keyCode;
		switch (keycode) {
			case 37://左移
				if (x<=0) {//左边界
				}else {
                    compare(37,arrays[mapnum]);
				}
				break;
            case 38://上移
                if (y<=0) {//上边界
                }else {
                    compare(38,arrays[mapnum]);
                }
                break;
            case 39://右移
                if (x > array[y].length-1) {//右边界
                }else {
                    compare(39,arrays[mapnum]);
                }
                break;
            case 40://下移
                if (y > array.length - 2) {//下边界
                }else {
                    compare(40,arrays[mapnum]);
                }
                break;
		}
	}
}




