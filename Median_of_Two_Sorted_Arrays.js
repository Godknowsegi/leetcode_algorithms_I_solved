var findMedianSortedArrays = function (nums1, nums2) {
  let data = [...nums1, ...nums2];
  function sortNumber(a, b) {
    return a - b;
  }
  data.sort(sortNumber);
  let indexfinder = data.length / 2;
  let str = "" + indexfinder;
  //   return typeof(""+indexfinder)
  if (str.includes(".")) {
    let holder = data.length - 1;
    let index = holder / 2;
    let cocient = data[index];
    return cocient;
  } else {
    let ans = data[indexfinder] + data[indexfinder - 1];
    return ans / 2;
  }
};

console.log(findMedianSortedArrays([-10, -60, 2], [1, 8, 90.6]));
