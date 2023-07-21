

export default () => {


    // Sorting Algorithms

    // MergeSort

    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare elements from the left and right arrays and merge them in sorted order
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Append the remaining elements from the left or right array
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }


    function mergeSort(array) {
        // Base case: If the array has only one element, it is already sorted
        if (array.length <= 1) {
            return array;
        }

        // Divide the array into two halves
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        // Recursively sort the two halves
        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);

        // Merge the sorted halves
        return merge(sortedLeft, sortedRight);
    }



    // Example usage
    // const unsortedArray = [9, 2, 5, 1, 7, 4, 8, 3, 6];
    // const sortedArray = mergeSort(unsortedArray);
    // console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


    /////////////////////////////////////////////////////////////////////////////////


    // Quick Sort

    function quickSort(array) {

        // Base case: If the array has only one element, it is already sorted
        if (array.length <= 1) return array;

        // Select the pivot element from the middle of the array
        const pivotIndex = Math.floor(array.length / 2);
        const pivot = array[pivotIndex];



        // Create arrays to hold elements less than, equal to, and greater than the pivot
        const less = [];
        const equal = [];
        const greater = [];


        // Partition the array by comparing elements to the pivot
        for (let element of array) {
            if (element < pivot) less.push(element);
            else if (element > pivot) greater.push(element);
            else equal.push(element);

        }



        // Recursively sort the sub-arrays and combine the results
        return [...quickSort(less), ...equal, ...quickSort(greater)];
    }

    // Example usage with numbers
    // const unsortedNumbers = [9, 2, 5, 1, 7, 4, 8, 3, 6];
    // const sortedNumbers = quickSort(unsortedNumbers);
    // console.log(sortedNumbers);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


    // Example usage with strings
    // const unsortedStrings = ['banana', 'apple', 'cherry', 'date', 'grape'];
    // const sortedStrings = quickSort(unsortedStrings);
    // console.log(sortedStrings);  // Output: ["apple", "banana", "cherry", "date", "grape"]



    /////////////////////////////////////////////////////////////////////////////////




    // Linear search is the best we can do when searching in unsorted arrays, such as [2, 3, 1].

    function linearSearch(arr, target) {
        for (let i in arr) {
            if (arr[i] === target) return i
        }
        return -1
    }

    // console.log(linearSearch([1, 2, 550, 4], 550)) // 0
    // console.log(linearSearch([1, 2, 3, 4], 4)) // 3
    // console.log(linearSearch([1, 2, 3, 4], 6)) // -1
    // console.log(linearSearch([3, 4, 1, 6, 3], 6)) // 3



    // Binary Search is a great choice if we have to make multiple searches on large arrays

    function binarySearch(arr, target) {
        let start = 0
        let end = arr.length - 1

        while (start <= end) {


            let middle = Math.floor((start + end) / 2)

            // Search the right half
            if (arr[middle] < target) start = middle + 1

            // Search the left half  
            else if (arr[middle] > target) end = middle - 1

            // Found target 
            else if (arr[middle] === target) return middle

        }
        // Target not found
        return -1
    }

    // console.log(binarySearch([1, 2, 3, 4], 1)) // 1
    // console.log(binarySearch([1, 2, 3, 5, 9], 4)) // -1
    // console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
    // console.log(binarySearch([0, 3], 3)) // 1


}