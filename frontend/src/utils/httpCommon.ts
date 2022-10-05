import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

import {
  getAccessToken,
} from './auth';

import { JSONObject } from '@/types';



console.log(process.env.BASE_URL, 'process.env.BASE_URL');

export default class HttpCommon {
  static axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 30000,
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

  static responseHandler = async (resp: JSONObject): Promise<JSONObject | Error> => {
    const result = _.get(resp, 'data', {});
    if (result?.err_code !== 0) {
      throw new Error(JSON.stringify(result));
    } return result;
  };

  static Get = async (url: string, params?: any): Promise<JSONObject | Error> => {
    const result = await this.axiosInstance.get(url, this.renderParamsGet(params));
    return this.responseHandler(result);
  };

  static Post = async (url: string, data: JSONObject): Promise<JSONObject | Error> => {
    const result = await this.axiosInstance.post(url, qs.stringify({
      ...data,
    }), this.renderParamsPost());
    return this.responseHandler(result);
  };
}

