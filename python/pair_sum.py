def pair_sum(numbers, target_sum):
  indx = []
  for num in range(len(numbers)):

    for number in range(num + 1, len(numbers)):

      if numbers[num]+numbers[number] == target_sum:
        indx.append(num)
        indx.append(number)
  return tuple(indx)
