arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filteroddnumber(arr) {
    count = 0;
    for (i of arr) {
        if (i % 2 != 0) {
            count += 1;
        }
    }
    console.log(count);
}
filteroddnumber(arr);