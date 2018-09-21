import * as React from "react";
import { VerticalTextExample, HorizontalTextExample } from "./example";
import { $$horizontal_text, $$vertical_text } from "./text.db";
import Divider from "antd/lib/divider";

const textData: object[] = [
  { template: <HorizontalTextExample/>, data: $$horizontal_text },
  { template: <VerticalTextExample/>, data: $$vertical_text },
  { template: <Divider orientation="left">设计师推荐</Divider>, data: null }
];

export default textData;
