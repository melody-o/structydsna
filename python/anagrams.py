# anagrams
# Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

def anagrams(s1, s2):
  obj = {}
  str1 = s1.lower()
  str2 = s2.lower()

  for char in str1:
    if not char in obj:
      obj[char] = 0
    obj[char] += 1

  for char in str2:
    if char in obj:
      obj[char] -= 1
    else:
      return False

  for char in obj:
    if obj[char] != 0:
      return False


  return True
