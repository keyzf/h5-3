import React from "react";
import { useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
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
      dispatch({ type: "INIT", payload: resp });
    });
  }, []);

  return <RenderH5 />;
});
