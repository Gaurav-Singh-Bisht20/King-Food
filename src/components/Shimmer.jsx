const Shimmer = () => {
    return (
      <div className=" flex gap-8 flex-wrap mx-20 my-10 justify-around ">
        {Array(20).fill("").map((e, index) => (
          <div className="h-64 w-52 bg-slate-300 rounded-lg " key={index}></div>
        ))}
      </div>
    );
  };
  

export default Shimmer