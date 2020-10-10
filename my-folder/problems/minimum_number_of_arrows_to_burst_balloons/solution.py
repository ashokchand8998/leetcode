class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        p_sets = sorted(points)
        #print(p_sets)
        i = 0
        while i < len(p_sets) - 1:
            curr_end = p_sets[i][1]
            nxt_start = p_sets[i+1][0]
            if curr_end >= nxt_start:
                p_sets = p_sets[:i] + [[nxt_start, min(curr_end, p_sets[i+1][1])]] + p_sets[i+2:]
            else:
                i += 1
            #print(p_sets)
        return len(p_sets)