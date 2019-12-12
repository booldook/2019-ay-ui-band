# css 정리
1. css(cascading style sheet)는 style sheet 라고 얘기함.
2. html의 head안에서 <style></style>로 선언한다.

## CSS 선언
~~~html
<html>
	<head>
		<!-- 각종 링크 및 제목, meta정보를 기재하는 곳 -->
		<style>
			/* 이 영역은 css 영역입니다. */
		</style>
	</head>
	<body>
		<!-- HTML 본문 영역입니다. -->
	</body>
</html>
~~~

## CSS 속성
~~~css
/* 
css의 가장 중요한 개념들 
- display속성: block, inline, inline-block, none
- float: left, right
- float는 불안정한 상태 이므로 위치를 잡은 이후에 아래 태그에서 고정시켜줘야 함. (clear: both;)
*/

/* 기본 Block 속성 */
div(block을 대표하는 태그-속성없음) ...Semantic요소[header, section, footer, aside, nav]

/* 기본 inline 속성 */
span(inline을 대표하는 태그-속성없음), a, b, img

/* 배경 */
background-color: red; 

/* 글자와 관련된 속성 */
color: #333;
font-size: 24px; /* 단위: px, %, rem, em, vw, vh ... */
text-decoration: none; /* underline, line-through ... */
font-family: 'Gulim', 'sans-serif';
font-weight: normal, bold, 100, 200, 300...
line-height: 1, 1.5, 2, 30px... /* 줄간 */
letter-spacing: 5px;

/* 글자 정렬과 관련된 속성 */
text-align: center; /* left, right, center, justify */

/* 테두리와 관련된 속성 */
border: 1px solid red;

/* 여백과 관련된 속성 */
margin: 12px; /* 상, 우, 하, 좌 12px */
margin: 12px 16px 20px 24px; /* 상(12px),우(16px),하(20px),좌(24px) */
margin: 12px 20px; /* 상하(12px), 좌우(20px) */
padding: 12px; /* margin과 주는방식이 똑같음 */

margin-left: 12px;
margin-top: 12px;
margin-right: 12px;
margin-bottom: 12px;

/* block을 문서의 가운데 정렬하려면 */
margin: 0 auto;
~~~