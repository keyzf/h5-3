import * as React from "react";
import { useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import MetaTags from "react-meta-tags";
import entrance_api from "../../api/entrance";
import RenderH5 from "./renderH5";

interface Props {
  id: number;
  web: string;
}

export default React.memo((props: Props) => {
  const dispatch = useDispatch();
  dispatch({ type: "GLOBAL", payload: { sid: props.id } });
  useEffect(() => {
    entrance_api(props.id, props.web).then(resp => {
      console.log(resp);
      dispatch({ type: "INIT", payload: resp });
    });
  }, []);
  return (
    <div>
      <MetaTags>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </MetaTags>
      <RenderH5 />
    </div>
  );
});
