import * as React from "react";
import {keyframes} from "emotion";
import styled from "react-emotion";
import {useCallback, useEffect, useState} from "react";
import Store from "../../typing/store";
import {useMappedState} from "redux-react-hook";
import {on} from "cluster";

// 设置动画
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 设置组件
const RotateAtom = styled("div")`
  animation: ${rotate360} 2s linear infinite;
`;

const MusicUi = React.memo(() => {
    const [state, setState] = useState(false);
    const {music} = useMappedState(
        useCallback(
            (state: Store) => ({
                music: state.music
            }),
            []
        )
    );
    const onClickStop = (name: any) => {
        if (name === "open") {
            // @ts-ignore
            document.getElementById("h5_audio").pause();
            setState(true);
        }
        if (name === "stop") {
            // @ts-ignore
            document.getElementById("h5_audio").play();
            setState(false);
        }
    };

    return (
        <React.Fragment>
            <audio id={"h5_audio"} loop={true} src={music.url}/>
            {state ? (
                <div
                    onClick={() => onClickStop("stop")}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50px",
                        width: "25px",
                        height: "25px",
                        background: "rgba(0,0,0,0.4)",
                        padding: "6px"
                    }}
                >
                    <i
                        style={{
                            padding: 0,
                            margin: "0",
                            color: "white",
                            fontSize: "18px"
                        }}
                        className={"iconfont icon-yinfu"}
                    />
                </div>
            ) : (
                <div
                    onClick={() => onClickStop("open")}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50px",
                        width: "25px",
                        height: "25px",
                        background: "rgba(0,0,0,0.4)",
                        padding: "6px"
                    }}
                >
                    <RotateAtom>
                        <i
                            style={{
                                padding: 0,
                                margin: 0,
                                color: "white",
                                fontSize: "18px"
                            }}
                            className={"iconfont icon-yinfu"}
                        />
                    </RotateAtom>
                </div>
            )}
        </React.Fragment>
    );
});

export default MusicUi;
