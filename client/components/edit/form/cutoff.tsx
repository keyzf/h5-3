import * as React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/lib/date-picker/locale/zh_CN";
moment.locale("zh-cn");

const FormEditDate = React.memo((props: { fun: any; date: any }) => {
  const onChange = e => {
    props.fun(e.format("YYYY-MM-DD"));
  };
  return <DatePicker onChange={onChange} locale={locale} />;
});

export default FormEditDate;
