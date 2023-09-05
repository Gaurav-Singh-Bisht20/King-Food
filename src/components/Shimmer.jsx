const Shimmer = () => {
    return (
      <div className="shimmer-cardlist container">
        {Array(20).fill("").map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
      </div>
    );
  };
  

export default Shimmer