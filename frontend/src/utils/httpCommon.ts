import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

import {
  getAccessToken,
} from './auth';
import { JSONObject } from '@/types';
import { IResponse } from '@/commons/constants/api-request';
import { notify } from '@/components/atoms';
import { isMobile } from "react-device-detect"

export default class HttpCommon {
  static axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 15000,
  });

  static commonConfig = () => {
    const ACCESS_TOKEN = getAccessToken();
    return {
      ...ACCESS_TOKEN ? { 'Authorization': 'Bearer ' + ACCESS_TOKEN } : {}
    };
  };

  static renderParamsGet = (ctx: JSONObject = {}) => ({
    params: {
      ...ctx,
    },
    headers: { ...this.commonConfig(), ...{ 'Content-Type': 'application/json' } },

  });

  static renderParamsPost = () => ({
    headers: { ...this.commonConfig() },
  });

  static responseHandler = async (resp: JSONObject, isNotify = true): Promise<JSONObject | Error> => {
    if (resp?.err_code === 200 || resp?.err_code === 201) {
      isNotify && notify('success', isMobile ? "bottom-center" : 'top-right', resp?.msg)
      return resp;
    }
    else {
      isNotify && notify('error', isMobile ? "bottom-center" : 'top-right', resp?.msg)
      throw new Error(JSON.stringify(resp))
    }

  };

  static Get = async (url: string, params?: any, isNotify?: boolean): Promise<JSONObject | Error | any> => {
    try {
      const result: IResponse = await this.axiosInstance.get(url, this.renderParamsGet(params));
      return this.responseHandler(_.get(result, 'data', {}), isNotify);
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.message.includes('Network Error')) return this.responseHandler({
          err_code: 500,
          msg: 'Network error'
        },)
        return this.responseHandler(error?.response && error?.response.data, isNotify)
      }
    }
  };

  static Post = async (url: string, data: JSONObject, isNotify?: boolean): Promise<JSONObject | Error | any> => {
    try {
      const result: IResponse = await this.axiosInstance.post(url, qs.stringify({
        ...data,
      }), this.renderParamsPost());
      return this.responseHandler(_.get(result, 'data', {}), isNotify);
    } catch (error) {

      if (axios.isAxiosError(error)) {
        if (error.message.includes('Network Error')) return this.responseHandler({
          err_code: 500,
          msg: 'Network error'
        }, isNotify)
        return this.responseHandler(error?.response && error?.response.data, isNotify)
      }
    }
  };
}

