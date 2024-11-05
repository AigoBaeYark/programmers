function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  babbling.map((babe, i) => {
    const filter = list.filter((val) => babe.includes(val));
    const filterToStr = filter.join("");

    if (babe.length === filterToStr.length) ++answer;
  });

  return answer;
}
