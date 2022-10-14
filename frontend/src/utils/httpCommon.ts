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

const err_network = new Map([
  ['timeout', 'timeout of 15000ms exceeded'],
  ['network', 'Network Error'],
  ['request', 'Server Error']
])

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

  static convertResponseError = (error: any, ctx: any, isNotify: boolean) => {
    const variable = error.message.toLowerCase().split(" ");
    if (err_network.get(variable[0] as string)) {
      return ctx({
        err_code: 500,
        msg: err_network.get(variable[0] as string)
      }, isNotify);
    }
    return ctx(error?.response && error?.response.data, isNotify)

  }

  static Get = async (url: string, params?: any, isNotify?: boolean): Promise<JSONObject | Error | any> => {
    try {
      const result: IResponse = await this.axiosInstance.get(url, this.renderParamsGet(params));
      return this.responseHandler(_.get(result, 'data', {}), isNotify);
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        return this.convertResponseError(error as Error, this.responseHandler, isNotify as boolean)
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
        return this.convertResponseError(error as Error, this.responseHandler, isNotify as boolean)
      }
    }
  };
}

