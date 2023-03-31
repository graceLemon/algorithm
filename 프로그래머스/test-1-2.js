// 2. 중. Triangular Output

// 다음 예제와 같은 모양으로 ‘*’을 출력하세요.
// (공백의 개수와 별의 개수를 정확하게 확인해주시길 바랍니다. 🙆🏻‍♂️)

function solution(star) {
	let output = ''

	for (let i = 0; i < star; i++) { //4.인수 star만큼 반복되도록 for문을 이용합니다.
		for (let k = 0; k < i; k++) {
			//6.차례대로 공백을 증가 시켜준다.
			output += ' '
		}

		for (let j = 0; j < 2 * (star-i)-1; j++) { 
			//5.여기서는 역삼각형으로 출력해야하기 때문에 인수star에서 i의 값을 뺀 값에 2를 곱해주고 역이니까 -1
			output += '*'
		}
		output += '\n'
	}

	for (let i = 1; i < star; i++) { //1.인수 star만큼 반복되도록 for문을 이용합니다.
		for (let k = 0; k < (star- i)-1; k++) { 
			//3. 이제 맨 아랫줄 부터 공백을 출력하여 삼각형 형태만들기 -1은 아랫줄에 첫번째칸 공백을 없애주려고
			output += ' '
		}

		for (let j = 0; j < (2 * i + 1); j++) {//2. 2*i+1 1,3,5,7 순으로 나오게 별을 출력하고
			output += '*'
		}
		output += '\n'
	}

	console.log(output)
}

let star = 7;
solution(star)