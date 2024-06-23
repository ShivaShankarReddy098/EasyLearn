function Error() {
  return (
    <>
      <div className=" mt-24 h-screen w-screen flex-wrap text-center flex justify-center flex-row">
        <p className="text-2xl font-mono font-semibold">Page Is Not Found</p>
        <img className=" w-[100%] h-[95%] " src="/404_Error.jpg" />
      </div>
    </>
  );
}
export default Error;
