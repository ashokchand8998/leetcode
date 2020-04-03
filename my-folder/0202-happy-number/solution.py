class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        
        while True:
            r = 0
            sum = 0
            while n != 0:
                r = n % 10
                sum += r*r
                n = n / 10
            n = sum
            if n == 1:
                return True
            elif n == 4:
                return False
                """
        while True:
            l = [int(i)**2 for i in list(str(n))]
            n = sum(l)
            if n == 1:
                return True
            elif n == 4 :
                return False
            
            
