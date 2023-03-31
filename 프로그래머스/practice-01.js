/*
문제1.신대륙 발견

기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

제한 조건
1 ≤ month ≤ 12
1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

입출력 예
month 11
day 6
result "3월 5일"
*/

/*
문제 분석
입력된 날짜를 기준으로 98일 이후의 날짜 변환하는 함수를 만들어야 한다.
*/

function solution(month, day){
  let date = new Date(2022, month-1, day+98);
  let get_month = date.getMonth()+1;
  let get_day = date.getDate();
    return (`${get_month}월 ${get_day}일`)
}
console.log(solution(1,18))
