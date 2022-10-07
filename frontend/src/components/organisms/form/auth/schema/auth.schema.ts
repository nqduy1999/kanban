import { MAX_ERR, MIN_ERR, REQUIRED_ERR } from "@/commons/form";
import * as Yup from "yup";

export const passwordValidationSchema = Yup.string().min(8, MIN_ERR(8)).max(32, MAX_ERR(32)).required(REQUIRED_ERR("password"));
export const confirmPasswordValidationSchema = Yup.string().min(8, MIN_ERR(8)).max(32, MAX_ERR(32)).required(REQUIRED_ERR("confirm password"));
export const usernameValidationSchema = Yup.string().min(8, MIN_ERR(8)).max(32, MAX_ERR(32)).required(REQUIRED_ERR("username"));
