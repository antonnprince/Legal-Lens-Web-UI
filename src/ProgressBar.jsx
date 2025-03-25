const ProgressBar = () => {
    const success = 63;
    const loss = 100 - success;
  
    return (
      <div style={{ width: "300px", border: "1px solid #ccc", padding: "10px" }}>
        <div style={{ height: "30px", backgroundColor: "#4CAF50", width: `${success}%` }}>
          {success}% Success
        </div>
        <div style={{ height: "30px", backgroundColor: "#FF5252", width: `${loss}%` }}>
          {loss}% Loss
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  