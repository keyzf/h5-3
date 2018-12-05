import axios from "axios";
import URLSearchParams from '@ungap/url-search-params';

/**
 * @desc 获取全体数据，对正确返回与错误返回作出处理
 * @param id
 * @param web
 */
const entrance_api = (id: number, web: string) => {
    const params: any = new URLSearchParams();
    const ajaxUrl: string = `${
        web === "r" ? "/view/getData" : "/Create/getData"
        }`;

    params.append("id", `${id}`);
    return new Promise((resolve: any, reject: any) => {
        axios
            .post(`${window.location.origin}${ajaxUrl}`, params)
            .then(response => {
                if (parseInt(response.data.error)) {
                    reject(response.data.url);
                } else {
                    // 调用函数，调整数据源数据
                    resolve(response.data);
                }
            })

    });
};

export default entrance_api;
