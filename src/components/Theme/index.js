import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../features/ThemeSlice";

function Theme() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const handleChaneInput = (e) => {
    setColor(e.target.value);
  };
  const onSetColor = () => {
    dispatch(setTheme(color));
  };

  return (
    <div>
      <h6>Theme Change</h6>
      <input type="text" className="w-50 h-100" onChange={handleChaneInput} />
      <button className="btn btn-success btn-sm" onClick={onSetColor}>
        Set Color
      </button>
    </div>
  );
}

export default Theme;
