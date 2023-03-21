//문제 설명
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

//재한사항
//s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  if (s.length % 2 == 0) {
    //substr(a,b) 특정 위치에서 시작하여 문자 수 만큼 반환하고 a번째부터 b개 글자 가져오기
    return s.substr(s.length / 2 - 1, 2);
  } else {
    return s.substr(s.length / 2, 1);
  }
}
