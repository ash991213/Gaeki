module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018, // 최신 문법 지원
		sourceType: 'module', // 모듈 시스템 사용시
		ecmaFeatures: {
			jsx: true, // 리액트의 JSX 파싱을 위해서
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	extends: [
		'plugin:react/recommended', // 리액트 추천 룰셋
		'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
		// eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
		'prettier/@typescript-eslint',
		// eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
		'plugin:prettier/recommended', // (eslint-plugin-prettier)
	],
	settings: {
		react: {
			version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
		},
	},
};
