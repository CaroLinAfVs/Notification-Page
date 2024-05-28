function App() {
  return (
    <div className=" bg-body-bg h-screen flex justify-center items-center">
      <div className=" bg-white rounded-lg w-4/5 flex flex-col justify-center items-center p-12">
        <div className="notify-nav w-full flex justify-between">
          <h3 className="text-3xl text-black font-bold">
            Notifications{' '}
            <span className="text-xl rounded-lg mx-4 py-1 px-3.5 bg-notify-count text-white">
              0
            </span>
          </h3>
          <p>Mark all as read</p>
        </div>
        <div className="mt-4 p-2 flex justify-center flex-col items-center">
          <div className="noti-no-see bg-body-bg p-2 rounded-lg flex justify-around items-center mb-4">
            <img
              className="mr-2 w-16 rounded-full"
              src="./images/avatar-mark-webber.webp"
              alt="avatar"
            />
            <div className="text-base">
              <p>
                <span className="font-bold mr-1">Mark Webber</span>
                reacted to your recent post
                <span className="font-bold ml-1">
                  My first tournament today!
                </span>
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>
              </p>
              <p>1m ago</p>
            </div>
          </div>
          <div className="text-noti flex justify-around items-center ">
            <img
              className="mr-2 w-16 rounded-full"
              src="./images/avatar-rizky-hasanuddin.webp"
              alt="avatar"
            />
            <div className="text-base w-full">
              <p>
                <span className="font-bold mr-1">Rizky hasanuddin</span>
                sent you a private message
              </p>
              <p>5 days ago</p>
            </div>
          </div>
          <div className=" p-4 text-base hover:bg-body-bg text-black m-8 border-solid border-2 border-slate-500 rounded-lg">
            <p>
              Hello, thanks for setting up the Chess Club.I've been a member for
              a few weeks now and I'm already having lots of fun and improving
              my game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
