function solution2(video_len, pos, op_start, op_end, commands) {
  const toSeconds = (time) =>
    time.split(":").reduce((min, sec) => parseInt(min) * 60 + parseInt(sec));

  const video_len_sec = toSeconds(video_len);
  const pos_sec = toSeconds(pos);
  const op_start_sec = toSeconds(op_start);
  const op_end_sec = toSeconds(op_end);

  let answer_sec = pos_sec;

  commands.forEach((val) => {
    if (answer_sec >= op_start_sec && answer_sec <= op_end_sec) {
      answer_sec = op_end_sec;
    }

    answer_sec +=
      val.toLowerCase() === "next"
        ? 10
        : val.toLowerCase() === "prev"
        ? -10
        : 0;

    answer_sec = Math.max(0, Math.min(answer_sec, video_len_sec));

    if (answer_sec >= op_start_sec && answer_sec <= op_end_sec) {
      answer_sec = op_end_sec;
    }
  });

  return `${String(Math.floor(answer_sec / 60)).padStart(2, "0")}:${String(
    answer_sec % 60
  ).padStart(2, "0")}`;
}
