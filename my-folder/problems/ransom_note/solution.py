class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        for i in ransomNote:
            if i in magazine and ransomNote.count(i) <= magazine.count(i):
                continue
            else:
                return False
        else:
            return True