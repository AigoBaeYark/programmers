function solution(num, total) {
  const answer = [];
  const half = Math.round(num / 2);
  const totalDivnum = Math.round(total / num);
  for (let index = 0; index < num; index++) {
    if (index >= half) answer.push(totalDivnum - (num - index));
    else answer.push(totalDivnum + index);
  }

  return answer.sort((a, b) => a - b);
}
