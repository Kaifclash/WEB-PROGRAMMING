arr = [1, 2, 3, 4, 5, 6, 7, 8];


function findlargest(arr) {
    arr.sort((a, b) => b - a);
    console.log(arr[0]);

}
findlargest(arr);