# 로또

## 핵심  기능

- 로또를 발행하고 비교할 수 있다.

## 기억할 것

- 작은 단위부터 하자. (단, 핵심에 가까운)
- 코드 양이 적을 때 리펙터링 하자.

## 기능 목록

### 1개의 사용자 로또 발행하기

- [x] 1에서 45까지 범위에서 중복되지 않는 6개의 숫자를 추출한다.
- [x] 1개의 로또를 생성한다.
- [ ] 로또 번호는 오름차순이다.

### 당첨 로또와 사용자 로또 비교하기

- [x] 당첨 로또와 N개의 번호가 일치한다.
  - [x] 당첨 로또와 N개의 번호가 일치하며 보너스 번호는 일치하지 않는다.
  - [x] 당첨 로또와 N개의 번호가 일치하며 보너스 번호도 일치한다.

### N개의 사용자 로또 발행하기

- [x] N개의 사용자 로또를 생성한다.
  - N개의 로또는 각각 독립적이다.
- [x] N개의 사용자 로또를 가져올 수 있다.
- [x] N개의 사용자 로또를 업데이트할 수 있다.


### 입력하기

- [x] '구입금액을 입력해 주세요.'라는 문구와 함께 구입 금액을 입력 받는다.
  - [ ] 입력으로 받은 구입금액을 번호를 문자열에서 숫자로 변환한다.
  - [x] [예외처리] 구입금액을 입력받는 도중에 예외가 발생하면 에러 메시지를 반환한다.
  - [x] [예외처리] 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

- [x] '당첨 번호를 입력해 주세요.' 라는 문구와 함께 당첨 번호를 입력받는다.
  - [x] 번호는 쉼표(,)를 기준으로 구분하며 정수로 변환한다.
  - [x] [예외처리] 당첨 번호를 입력받는 도중에 예외가 발생하면 에러 메시지를 반환한다.
  - [ ] [예외처리] 당첨 번호는 양의 정수가 아닌 값으로 들어올 수 없다.
  - [ ] [예외처리] 당첨 번호는 정확히 6개를 받아야 한다.
  - [ ] [예외처리] 당첨 번호는 1이상 45이하 숫자여야 한다.
- [x] '보너스 번호를 입력해 주세요.' 라는 문구와 함께 보너스 번호를 입력받는다.
  - [ ] 입력으로 받은 보너스 번호를 문자열에서 숫자로 변환한다.
  - [x] [예외처리] 보너스 번호를 입력받는 도중에 예외가 발생하면 에러 메시지를 반환한다.
  - [ ] [예외처리] 보너스 번호는 양의 정수가 아닌 값으로 들어올 수 없다.
  - [ ] [예외처라] 보너스 번호는 정확히 1개를 받아야 한다.
  - [ ] [예외처리] 보너스 번호는 1이상 45이하 숫자여야 한다.
  - [ ] [예외처리] 당첨 번호와 보너스 번호는 중복될 수 없다.

## 구입 금액에 따른 로또 개수 계산하기

- [x] 구입 금액에 해당하는 만큼 로또를 발행한다.
  - 로또 1장의 가격은 1,000원이다.

## 일치하는 개수에 따른 둥수 계산하기

- [x] 당첨 결과의 등수를 0으로 초기화 한다.
- [x] 당철 결과를 가져올 수 있다.
- [x] 당첨 로또와 사용자 로또의 일치하는 개수를 가지고 등수를 계산한다.
- [x] 당첨 결과에 해당하는 등수를 1 증가시킨다.

## 수익률 계산하기

- [ ] 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

### 출력하기

- [x] '(사용자 로또의 개수)개를 구매했습니다'라는 문구를 보여준다.
- [ ] 사용자 로또를 한 줄에 하나씩 보여준다.
- [ ] '당첨 통계\n---'라는 문구를 보여준다.
- [ ] 일치하는 개수와 그에 해당하는 금액과 수를 보여준다.
- [ ] '총 수익률은 (수익률)%입니다.'라는 문구를 보여준다.

### 예외처리

- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.
  - [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
- [ ] 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
