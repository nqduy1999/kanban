import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

import {
  getAccessToken,
} from './auth';
import { JSONObject } from '@/types';
import { IResponse } from '@/commons/constants/api-request';
import { notify } from '@/components/atoms';



export default class HttpCommon {
  static axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 30000,
  });

  static commonConfig = () => {
    const ACCESS_TOKEN = getAccessToken();
    console.log(ACCESS_TOKEN, 'ACCESS_TOKEN');

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

  static responseHandler = async (resp: JSONObject): Promise<JSONObject | Error> => {
    if (resp?.err_code === 200) {
      notify('success', 'top-right', resp?.msg)
      return resp;
    }
    else {
      notify('error', 'top-right', resp?.msg)
      throw new Error(JSON.stringify(resp))
    }

  };

  static Get = async (url: string, params?: any): Promise<JSONObject | Error | any> => {
    try {
      const result: IResponse = await this.axiosInstance.get(url, this.renderParamsGet(params));
      return this.responseHandler(_.get(result, 'data', {}));
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        return this.responseHandler(error?.response && error?.response.data)
      }
    }
  };

  static Post = async (url: string, data: JSONObject): Promise<JSONObject | Error | any> => {
    try {
      const result: IResponse = await this.axiosInstance.post(url, qs.stringify({
        ...data,
      }), this.renderParamsPost());
      return this.responseHandler(_.get(result, 'data', {}));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response && error?.response.data, "error?.response && error?.response.data");

        return this.responseHandler(error?.response && error?.response.data)
      }
    }
  };
}

