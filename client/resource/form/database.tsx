import random from "../../tools/random";

const FormUIData:any = [];

export const $$form_opt_upload = (form_id: string) => {
  return {
    type: "upload",
    form_id: form_id,
    isNeed: false,
    title: "上传",

    title_color: "#000",
    option: []
  };
};
export const $$from_opt_input = (form_id: string) => {
  return {
    form_id: form_id,
    type: "input",
    title: "输入框",
    isNeed: false,
    title_color: "#000",
    option: "",
    option_color: "#000"
  };
};
export const $$from_opt_rate = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "rate",
    title: "评分栏",
    title_color: "#000",
    option: 0,
    option_color: "#000"
  };
};
export const $$from_opt_checkbox = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "checkbox",
    title: "多选框",
    title_color: "#000",
    option_color: "#000",
    option: ["Apple", "Pear", "Orange"]
  };
};
export const $$from_opt_datepicker = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "datePicker",
    title: "日期选择",
    title_color: "#000",
    option: "",
    option_color: "#000"
  };
};
export const $$from_opt_name = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "name",
    title: "姓名",
    title_color: "#000",
    option: "请输入姓名",
    option_color: "#000"
  };
};
export const $$from_opt_phone = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "phone",
    title: "手机",
    title_color: "#000",
    option: "请输入手机号",
    option_color: "#000"
  };
};
export const $$from_opt_mobile = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "mobile",
    title: "电话",
    title_color: "#000",
    option: "请输入电话号码",
    option_color: "#000"
  };
};
export const $$from_opt_address = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "address",
    title: "地址",
    title_color: "#000",
    option: "请输入地址",
    option_color: "#000"
  };
};
export const $$from_opt_email = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "email",
    title: "邮箱",
    title_color: "#000",
    option: "请输入邮箱",
    option_color: "#000"
  };
};
export const $$from_opt_radio = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "radio",
    title: "单选框",
    title_color: "#000",
    option: ["选项一", "选项二", "选项三"],
    option_color: "#000"
  };
};
export const $$from_opt_select = (form_id: string) => {
  return {
    form_id: form_id,
    isNeed: false,
    type: "select",
    title: "下拉选项",
    title_color: "#000",
    option: ["选项一", "选项二", "选项三"],
    option_color: "#000"
  };
};

const data = [
  {
    item: [
      $$from_opt_name(random()),
      $$from_opt_phone(random()),
      {
        type: "textarea",
        form_id: random(),
        title_color: "#000",
        option_color: "#000",
        title: "备注",
        isNeed: false,
        choose: false,
        decorator: "备注",
        option: "请填写备注"
      }
    ],
    desc: "提交数据"
  },
  {
    item: [
      {
        form_id: random(),
        type: "radio",
        title: "应聘岗位",
        title_color: "#000",
        option_color: "#000",
        isNeed: false,
        option: ["管理", "策划", "销售"]
      },
      $$from_opt_name(random()),
      {
        form_id: random(),
        type: "radio",
        title: "性别",
        title_color: "#000",
        option_color: "#000",
        isNeed: false,
        option: ["男", "女"]
      },
      {
        form_id: random(),
        type: "datePicker",
        title: "出生日期",
        title_color: "#000",
        option: "",
        isNeed: false,
        opt_color: "#000"
      },
      $$from_opt_phone(random()),
      $$from_opt_email(random()),
      {
        form_id: random(),
        type: "input",
        isNeed: false,
        title_color: "#000",
        option_color: "#000",
        title: "毕业学校",
        option: "请输入毕业学校"
      },
      {
        form_id: random(),
        type: "select",
        title: "学历",
        isNeed: false,
        title_color: "#000",
        option: ["博士", "研究生", "本科", "大专"],
        option_color: "#000"
      },
      {
        form_id: random(),
        type: "textarea",
        title: "工作经历",
        isNeed: false,
        title_color: "#000",
        option: "请输入工作经历",
        option_color: "#000"
      }
    ],
    desc: "提交数据"
  },
  {
    item: [
      $$from_opt_name(random()),
      $$from_opt_phone(random()),
      {
        form_id: random(),
        type: "input",
        title: "公司",
        title_color: "#000",
        option: "请填写公司名称",
        option_color: "#000"
      },
      {
        form_id: random(),
        type: "input",
        title: "职务",
        isNeed: false,
        title_color: "#000",
        option: "请填入职务",
        option_color: "#000"
      },
      {
        form_id: random(),
        type: "checkbox",
        title: "多选框",
        option: [
          "互联网",
          "餐饮/视频",
          "电商/零售",
          "文化/娱乐",
          "美容/时尚",
          "家居/地产",
          "教育/培训",
          "金融/银行"
        ],
        option_color: "#000"
      }
    ],
    desc: "提交数据"
  }
];

data.map((data, index) => {
  FormUIData.push({
    common: {
      type: "form",
      id: index
    },
    base: {
      item: data.item,
      desc: data.desc,
      font_color: "white",
      bg_color: ""
    },
    position: {
      width: 300,
      height: 100,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default FormUIData;
