const Slider = ({ slides }) => {
  const handleScroll = (indicator) => {
    const allSlides = document.querySelectorAll(".one-slide");

    let num = indicator === "next" ? -570 : 570;

    allSlides.forEach((el, ind, arr) => {
      el.style.transform = `translateX(${
        (el.style.transform.match(/translateX\((.*?)px\)/)
          ? Number(el.style.transform.match(/translateX\((.*?)px\)/)[1])
          : 0) + num
      }px)`;

      if (
        (el.style.transform.match(/translateX\((.*?)px\)/)
          ? Number(el.style.transform.match(/translateX\((.*?)px\)/)[1])
          : 0) /
          570 ===
        -(ind + 1)
      ) {
        el.style.transition = "none";
        el.style.transform = `translateX(${(arr.length - ind) * 570}px)`;
      } else if (
        (el.style.transform.match(/translateX\((.*?)px\)/)
          ? Number(el.style.transform.match(/translateX\((.*?)px\)/)[1])
          : 0) /
          570 ===
        arr.length - ind
      ) {
        el.style.transition = "none";
        el.style.transform = `translateX(${(-ind - 1) * 570}px)`;
      } else {
        el.style.transition = "transform .5s linear";
      }
    });
  };

  return (
    <div className="slider">
      {slides.map((s) => (
        <div className="one-slide">
          <div className="slide-id">
            {(s.id + 1).toString().padStart(2, "0")}
          </div>

          <div className="slide-text">{s.text}</div>

          <div className="slide-next" onClick={() => handleScroll("next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 256 256">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 89 46 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 88 c 0.553 0 1 0.448 1 1 S 89.553 46 89 46 z"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 75.057 59.943 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 L 87.586 45 L 74.35 31.764 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 13.943 13.943 c 0.391 0.391 0.391 1.023 0 1.414 L 75.764 59.65 C 75.568 59.846 75.313 59.943 75.057 59.943 z"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>

          <div className="pre-next">
            <svg
              onClick={() => handleScroll("pre")}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <g clip-path="url(#clip0_1_663)">
                <path
                  d="M10.8278 12L15.7778 16.95L14.3638 18.364L7.99983 12L14.3638 5.63601L15.7778 7.05001L10.8278 12Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_663">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 -1 24 24)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              onClick={() => handleScroll("next")}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <g clip-path="url(#clip0_1_660)">
                <path
                  d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_660">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
