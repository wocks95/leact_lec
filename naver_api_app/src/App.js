import NaverLogin from "./NaverLogin";

function App() {
  const getToken = (token) => {
    console.log("토큰", token);
  };

  return (
    <div >
      <NaverLogin setGetToken={getToken}/>
    </div>
  );
}

export default App;
