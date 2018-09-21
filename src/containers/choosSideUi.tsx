import * as React from "react";
import { Consumer } from "../context/context";
import textData from "../resources/text/exportData";
import random from "../utils/random";

interface Props {
  name: string;
}

class ChooseSideUi extends React.PureComponent<Props, any> {
  addH5Data = (fun: any, data: any, type: string) => {
    switch (type) {
      case "text":
        fun(data(random()));
    }

  };

  render() {
    let ui: object[] = [{}];
    switch (this.props.name) {
      case "text":
        ui = textData;
    }
    return (
      <Consumer>
        {({ add }) => (
          <div className={"chooseUi_over"}>
            {ui.map(
              (
                data: { template: object; data: null | object },
                index: number
              ) => {
                return (
                  <div
                    key={index}
                    className={`${data.data === null ? "" : "chooseUi_hover"}`}
                    onClick={
                      data.data === null
                        ? () => {
                        }
                        : this.addH5Data.bind(this, add, data.data, "text")
                    }
                  >
                    <div style={{ pointerEvents: "none" }}>{data.template}</div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </Consumer>
    );
  }
}

export default ChooseSideUi;
