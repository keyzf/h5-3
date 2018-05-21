import { Map } from "immutable";

export const $$background_database = Map(
  {
    name: "background",
    customize: Map({
      img: {
        upload: { value: "" }
      },
      img_config: {},
      color: {
        color: { value: "" }
      }
    }),
    advance: Map({
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 }
      }
    })
  }
);
