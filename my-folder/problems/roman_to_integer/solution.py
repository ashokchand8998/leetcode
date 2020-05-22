class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        values_dict = {"I": 1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
        s_list = list(s)
        
        #converting numbers from roman symbols to numbers using dictionary
        for i in range(len(s_list)):
            s_list[i] = values_dict[s_list[i]]
        
        #subtracting small numbers that are before any bigger number
        i = 1
        while i < len(s_list):
            if s_list[i] > s_list[i-1]:
                s_list[i] = s_list[i] - s_list[i-1]
                s_list.pop(i-1)                
            i += 1
        
        return sum(s_list)