import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollTop, selectScrollTop } from "../../Redux/Slice";
import { FaArrowAltCircleUp } from "react-icons/fa";
const TopButton = () => {
  const dispatch = useDispatch();
  const scrollTop = useSelector(selectScrollTop);

  const handleScrollTop = () => {
    dispatch(setScrollTop(0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        backgroundColor: "rgb(5, 5, 66)",
        border: "none",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <FaArrowAltCircleUp color="white" size={30} />
    </button>
  );
};

export default TopButton;
