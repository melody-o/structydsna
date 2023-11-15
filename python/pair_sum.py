# pair sum
# Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

# Be sure to return the indices, not the elements themselves.

# There is guaranteed to be one such pair that sums to the target.



def pair_sum(numbers, target_sum):
  indx = []
  for num in range(len(numbers)):

    for number in range(num + 1, len(numbers)):

      if numbers[num]+numbers[number] == target_sum:
        indx.append(num)
        indx.append(number)
  return tuple(indx)

#ideally use a hashmap
def pair_sum(numbers, target_sum):
  indx = {}

  for index, num in enumerate(numbers):
    tple = target_sum - num

    if tple in indx:
      return (indx[tple], index)
    indx[num] = index
