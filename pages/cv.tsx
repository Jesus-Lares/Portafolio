const Cv = () => {
  return (
    <div>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        name="CV"
        src="../public/cv.pdf"
        frameBorder="0"
      />
    </div>
  );
};

export default Cv;
