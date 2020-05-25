class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        #base condition
        if n == 1:
            return '1'
        #others
        else:
            val = 1                 #setting start value for count and say
            for num in range(2, n + 1):                 #traversing till the given input number
                
                #declaring list to store temporary count and say value, initialising iterating value and converting values to string for traversing
                x = []
                s_num = str(val)
                i = 0
                while i < len(s_num):
                    #creating a list for remaing list from given index
                    remList = s_num[i:len(s_num)]
                    
                    #condition for whether all remaining chars are same or not
                    if remList.count(s_num[i]) == len(remList):
                        x.extend([str(remList.count(s_num[i])) , s_num[i]])                 #extending list with char and its count
                        break

                    else:
                        #counting current value till another char is found 
                        count = 0
                        j = i
                        while s_num[j] == s_num[i]:
                            j += 1
                            count += 1
                        x.extend([str(count) , s_num[i]])
                        i = j
                        continue
                val = "".join(x)                    #reintialising val with new count and say value
            return "".join(x)