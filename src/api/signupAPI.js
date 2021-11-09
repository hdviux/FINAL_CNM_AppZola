import axiosClient from "./axiosClient";

const signupAPI = {
  checkPhone(phoneNumber) {
    const url = "/auth/checkPhone";
    console.log(phoneNumber.phone);
    return axiosClient.post(url, { phone: phoneNumber.phone });
  },
  signUp(data) {
    console.log(data);
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  },
  sendOTP(phoneNumber) {
    const url = "/auth/sendOtp";
    return axiosClient.post(url, phoneNumber);
  },
  verifyOTPSignUp(phoneNumber, code) {
    const url = "/auth/verifyOTPSignUp";
    return axiosClient.post(url, phoneNumber, code);
  },
};
export default signupAPI;
