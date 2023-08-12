const QRCodeGenerator = () => {
  return (
    <div>
      <div className="card flex bg-indigo-400 h-screen place-content-center items-center">
        <div className=" border rounded-xl w-60 h-80 shadow-lg p-6 md:items-center bg-white">
          <div className="bg-blue-400 rounded-xl">
            <img
              className="qrcode-img w-56 p-6 h-40  "
              src="../../images/qrcode.png"
            />
          </div>
            <div className="my-2 ">
              <h2 className="text-xl font-bold">Improve Your Frontend Skills.</h2>
              <h3 className="text-slate-600">Scan QrCode and Visit Frontend Mentor.</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
