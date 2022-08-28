// export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const CLIENT_ID = 'aeb14f4ae96021ad293c74ab10f84dbc';
export const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
export const KAKAO = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
