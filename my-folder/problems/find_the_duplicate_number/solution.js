/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // using floyd's algorithm for finding 1st node of cycle
    slow = 0;
    fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]]
    }
    while(slow != fast)
    
    slow2 = 0;

    do {
        slow = nums[slow];
        slow2 = nums[slow2];
    } while(slow != slow2);

    return slow;
    
};