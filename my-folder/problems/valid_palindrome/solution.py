import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        ascii_list = [val.lower() for val in re.findall("[a-zA-Z0-9]", s)]
        return ascii_list == ascii_list[::-1]