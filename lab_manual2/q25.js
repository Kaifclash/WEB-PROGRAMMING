arr = [1, 2, 3, 4, 5, 6];
average(arr)

function average(arr) {
    sum = 0;
    for (i of arr) {
        sum += i;
    }
    len = arr.length;
    avg = sum / len;
    console.log(avg);
}