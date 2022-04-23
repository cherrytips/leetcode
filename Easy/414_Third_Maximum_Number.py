class Solution:
    def thirdMax(self, nums: list[int]) -> int:
        nums = list(set(nums))
        nums.sort(reverse=True)

        if(len(nums) < 3):
            return nums[0]
        else:
            return nums[2]


sol = Solution
nums = [-1, 2, 3]
print(sol.thirdMax(sol, nums))
