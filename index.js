// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//a为字符串，b为数组

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++) {
	a[i] *= 2;
}
console.log(a);
// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors[0] + " " + colors[1] + " " + colors[2] + " " + colors[3]);
// case 2 output: 'Red+Green+White+Black'
console.log(colors[0] + "+" + colors[1] + "+" + colors[2] + "+" + colors[3]);
// case 3 output: 'Red,Green,White,Black'
console.log(colors[0] + "," + colors[1] + "," + colors[2] + "," + colors[3]);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 0; i < a.length - 1; i++) {
	for (var j = 0; j < a.length - i - 1; j++) {
		if (a[j] < a[j + 1]) {
			var temp = a[j];
			a[j] = a[j + 1];
			a[j + 1] = temp;
		}
	}
}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 3, 3, 3];

//将数组排序 方便统计
a = a.sort();
//TODO should output: 'a'
/**
 * index 记录出现最多次数字符的下标
 * chat 需要统计的字符
 * count 统计
 * maxCount 出现最多的次数
 */
var index = 0,
	chat = a[0],
	count = 0,
	maxCount = 0;
for (var i = 0; i < a.length + 1; i++) {
	if (chat == a[i]) {
		count++; //如果相同，则统计+1
	} else {
		if (maxCount < count) { //记录出现最多次数字符的信息
			maxCount = count;
			index = i - 1;
			count = 1;
		}
		chat = a[i];
	}
}
console.log(a[index] + " " + maxCount)
