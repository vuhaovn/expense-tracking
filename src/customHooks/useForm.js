import { useState } from "react";
import { formatNumber } from "utils/formatNumber";

const useForm = (callbackSubmit) => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const regex = /^(?!0)\d+$/;

    if (e.target.name === "income") {
      const rawValue = e.target.value.replace(/,/g, ""); // Bỏ dấu phẩy để kiểm tra và lưu

      if (!regex.test(rawValue)) {
        setError(true);
        return; // Thoát nếu giá trị không hợp lệ
      } else {
        setError(false);
      }

      const formattedValue = formatNumber(rawValue);

      // Cập nhật giá trị không có dấu phẩy trong state
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: rawValue,
      }));

      // Cập nhật giá trị hiển thị trong input (với dấu phẩy)
      e.target.value = formattedValue;
    } else {
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    callbackSubmit();
  };

  return [state, error, handleChange, handleSubmit];
};

export default useForm;
