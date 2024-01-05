import "./App.css";

function App() {
  return (
    <div className=" flex flex-col h-screen items-center justify-center bg-blue-300 px-7">
      <div className=" md:w-[300px] mx-auto bg-white rounded-[30px] shadow-md overflow-hidden ">
        <div>
          <img className=" rounded-[30px] p-5 " src="image-qr-code.png"></img>
          <h1 className=" font-bold text-center p-5 ">
            Improve your front-end skills by building projects
          </h1>
          <h2 className=" text-center p-5 ">
            Scan the QR code to visit Frontend Mentor and take your coding to
            the next level
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
