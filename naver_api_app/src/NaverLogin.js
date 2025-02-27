import {useEffect} from 'react';

const NaverLogin = ({setGetToken, setUserInfo}) => {
  const { naver } = window
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = 'http://localhost:3000'
  
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
        clientId: CLIENT_ID,
        callbackUrl: NAVER_CALLBACK_URL,
        isPopup: false,
        loginButton: { color: 'green', type: 3, height: 58 },
        callbackHandle: true,
    })
    naverLogin.init();

    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log('로그인 성공'); // 백엔드 작성 시 변경해야될 부분!
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        console.log(userid, username);
      }
    })// 여기까지!
  }
  const userAccessToken = () => {
    if(window.location.href.includes('access_token')) {
      const token = window.location.href.split('=')[1].split('&')[0]
      setGetToken(token);
      window.location.href = "/nextpage";
    } 
  }
 
  useEffect(() => {
    if(!window.naver) {
      console.error('Naver SDK 로드 실패');
      return;
    }
    console.log('Naver SDK 로드 성공');
    initializeNaverLogin()
    userAccessToken()
  }, []);
  return (
    <>
      <div id="naverIdLogin" /> 
    </>
  );
};

export default NaverLogin;