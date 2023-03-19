/*문제3.소수의 개수와 덧셈 (상)*/

// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// 제한사항
// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.

// 입출력 예
// s
// "2 3 4 5"
// result
// "4 5"

// 공백을 분리해서 배열 만들고 소수만 거르고 오름차순으로 정렬하고 
// 공백,이어진 문자열로 만들기

function solution(s){
	let prime = [] //소수넣을 빈 배열 만들기
  let nonPrime = [] //소수 아닌 값 넣을 빈 배열 만들기
  let ssplit = s.split(' ') //s의 공백을 분리시켜 배열 만들기
  for (let i = 0; i<ssplit.length; i++) {
  if (isPrime(ssplit[i])) { //소수라면
        prime.push(ssplit[i]) //소수배열에 넣고
      } else { //아니면
        nonPrime.push(ssplit[i]) //소수 아닌 배열에 넣어라
      }
  }
  let maxPrime = prime.sort((a, b) => b - a) //소수배열은 내림차순 정렬하기(최대값 구하기 위해)
  let minNonPrime = nonPrime.sort((a, b) => a - b) //소수아닌 배열은 오름차순 정렬하기(최소값 구하기 위해)
  return `${minNonPrime[0]} ${maxPrime[0]}` //소수아닌 배열의 최소값과 소수배열의 최대값을 리턴한다
}
//소수 구하는 함수
const isPrime = function (n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}

let s= "97 75 88 99 95 92 73"

console.log(solution(s))