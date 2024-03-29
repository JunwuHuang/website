/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - "a".charCodeAt()]++;
    }
    // 将数组作为key，value为字符串的集合
    map[count] ? map[count].push(s) : (map[count] = [s]);
  }
  return Object.values(map);
};
