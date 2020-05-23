class Solution:
    def frequencySort(self, s: str) -> str:
        d = {}
        s_set = set(list(s))
        for i in s_set:
            d[i] = s.count(i)
        s_list = []
        d = {k: v for k, v in sorted(d.items(), key=lambda item: item[1])}
        for i,j in d.items():
            s_list.append(i * j)
        return "".join(reversed(s_list))
            