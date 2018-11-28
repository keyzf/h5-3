import {css} from "emotion";

const style = {
    mobile: css`
    @media (min-width: 0) and (max-width: 575px) {
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      display: none;
    }

    @media (min-width: 1200px) {
      display: none;
    }
  `,

    pc: css`
    @media (min-width: 0) and (max-width: 575px) {
      display: none;
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      display: none;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
    }

    @media (min-width: 1200px) {
    }
  `,

    text1c1: css`
    border: 0 none;
    padding: 0;
  `,

    text1c2: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

    text1c3: css`
    width: 30px;
    height: 10px;

    transform: skewX(45deg);
  `,

    text1c4: css`
    width: 30px;
    height: 10px;
    transform: skewX(-45deg);
  `,

    text1c5: css`
    padding: 0 15px;
  `,

    text2c1: css`
    border: 0 none;
    padding: 0;
  `,

    text2c2: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

    text2c3: css`
    width: 19px;
    height: 19px;
    border-radius: 100%;
    background: #fff;
    padding: 2px;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    margin-top: -30px;
    margin-right: -10px;
    box-sizing: border-box;
  `,

    text2c4: css`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #f8d497;
  `,

    text2c5: css`
    padding: 5px 20px;
  `,

    text2c6: css`
    width: 26px;
    height: 26px;
    border-radius: 100%;
    background: #fff;
    padding: 2px;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    margin-left: -10px;
    box-sizing: border-box;
  `,

    text2c7: css`
    width: 22px;
    height: 22px;
    border-radius: 100%;
    background: #f8d497;
  `,

    text3c1: css`
    border: 0 none;
    padding: 0;
  `,

    text3c2: css`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

    text3c3: css`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid #f8d497;
    margin-top: -30px;
    margin-right: -15px;
  `,

    text3c4: css`
    padding: 5px 20px;
  `,

    text3c5: css`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #f8d497;
    margin-left: 5px;
  `,

    text4c1: css`
    border: 0 none;
    padding: 0;
  `,

    text4c2: css`
    position: static;
    border: 0 none;
  `,

    text4c3: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

    text4c4: css`
    width: 25%;
    text-align: right;
  `,

    text4c5: css`
    opacity: 0.8;
    margin-top: 5px;
    border-bottom-width: 10px;
    border-bottom-style: solid;
    color: inherit;
    border-left-width: 6px !important;
    border-left-style: solid !important;
    border-left-color: transparent !important;
    border-right-width: 6px !important;
    border-right-style: solid !important;
    border-right-color: transparent !important;
    display: inline-block;
  `,

    text4c6: css`
    opacity: 0.4;
    border-right-width: 10px;
    border-left-width: 0;
    border-right-style: solid;

    color: inherit;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 5px;
    -webkit-transform: rotate(10deg);
    border-bottom-width: 6px !important;
    border-top-width: 6px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    display: inline-block;
  `,

    text4c7: css`
    border-left-width: 20px;
    border-right-width: 0;
    border-left-style: solid;

    color: inherit;
    -webkit-transform: rotate(10deg);
    border-bottom-width: 10px !important;
    border-top-width: 15px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    display: inline-block;
    vertical-align: middle;
  `,

    text4c8: css`
    width: 50%;
    text-align: center;
    padding-right: 5px;
    padding-left: 5px;
    display: inline-block;
  `,

    text4c9: css`
    display: inline-block;
  `,

    text4c10: css`
    width: 25%;
    text-align: left;
  `,

    text4c11: css`
    display: inline-block;
  `,

    text4c12: css`
    width: 0;
    height: 0;
    clear: both;
  `,

    text5c1: css`
    width: 0.6em;
    display: inline-block;
  `,

    text5c2: css`
    width: 0.6em;
    height: 0.6em;
    display: block;
    opacity: 0.2;
    color: #fff;
  `,

    text5c4: css`
    margin-top: 2px;
    margin-bottom: 2px;
    width: 0.6em;
    height: 0.6em;
    display: block;
    opacity: 0.6;
    color: #fff;
  `,

    text5c5: css`
    width: 0.6em;
    height: 0.6em;
    display: block;
    opacity: 1;
    color: #fff;
  `,

    text5c6: css`
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
  `,

    text6c1: css`
    border: 0 none;
    margin-top: 1em;
    margin-bottom: 0.5em;
    clear: both;
    padding: 0;
  `,

    text6c2: css`
    border-bottom: 1px solid;
  `,

    text6c3: css`
    display: inline-block;
    margin-bottom: -1px;
    line-height: 1.1;
    border-bottom: 6px solid;
    font-size: 1.8em;
    font-family: inherit;
    text-decoration: inherit;
  `,

    text7c1: css`
    position: static;
    border: 0 none;
    padding: 0;
  `,

    text7c2: css`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    text-align: right;
    position: static;
  `,

    text7c3: css`
    display: inline-block;
    vertical-align: middle;
    padding: 8px;
    border-radius: 0.5em;
    max-width: 90% !important;
  `,

    text7c4: css`
    position: static;
  `,

    text7c5: css`
    width: 0;
    border-left-width: 10px;
    border-left-style: solid;
    display: inline-block;
    margin-top: 1em;
    vertical-align: top;

    border-top-width: 6px !important;
    border-top-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-width: 6px !important;
    border-bottom-style: solid !important;
    border-bottom-color: transparent !important;
  `,

    text8c1: css`
    border: 0 none;
    padding: 0;
  `,

    text8c2: css`
    position: static;
  `,

    text8c3: css`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    position: static;
  `,

    text8c4: css`
    width: 0;
    border-right-width: 10px;
    border-right-style: solid;
    display: inline-block;
    margin-top: 1em;
    vertical-align: top;

    border-top-width: 6px !important;
    border-top-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-width: 6px !important;
    border-bottom-style: solid !important;
    border-bottom-color: transparent !important;
  `,

    text8c5: css`
    display: inline-block;
    vertical-align: middle;
    padding: 8px;
    border-radius: 0.5em;
    max-width: 90% !important;
  `,

    text8c6: css`
    position: static;
  `,

    text9c1: css`
    width: 5px;
    float: left;
  `,

    text9c2: css`
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    padding-top: 8px;
    padding-bottom: 10px;
    color: inherit;
  `,

    text9c3: css`
    border-left-width: 12px;
    border-right-width: 0;
    border-left-style: solid;
    display: inline-block;
    height: 10px;
    width: 10px;
    float: left;
    color: inherit;
    border-bottom-width: 8px !important;
    border-top-width: 8px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
  `,

    text9c4: css`
    padding: 2px 20px;
    font-size: 20px;
    color: #797979;
  `,

    text10c1: css`
    border-radius: 2em;
    line-height: 2.5em;
    padding: 4px;
    color: #fff;
  `,

    text10c2: css`
    border: 1px solid #fefefe;
    border-radius: 2em;
    padding: 4px;
  `,

    text10c3: css`
    text-align: center;
    white-space: normal;
  `,

    text11c1: css`
    border: 0 none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0;
    text-align: center;
  `,

    text11c2: css`
    display: inline-block;
    margin: auto;
  `,

    text11c3: css`
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-size: 1.2em;
    font-family: inherit;
    text-decoration: inherit;
  `,

    text11c4: css`
    margin-top: -3px;
  `,

    text11c5: css`
    width: 6px;
    height: 6px;
    float: left;
    margin-left: -1px;
    border-radius: 100%;
  `,

    text11c6: css`
    width: 6px;
    height: 6px;
    float: right;
    margin-right: -1px;
    border-radius: 100%;
  `,

    text11c7: css`
    color: #797979;
    padding: 8px 10px 5px;
  `,

    text11c8: css`
    margin-top: -3px;
  `,

    text11c9: css`
    width: 6px;
    height: 6px;
    float: left;
    margin-left: -3px;
    border-radius: 100%;
  `,

    text11c10: css`
    width: 6px;
    height: 6px;
    float: right;
    margin-right: -3px;
    border-radius: 100%;
  `,

    text12c1: css`
    padding: 5px 30px 5px 5px;
    border-radius: 0 20px 20px 0;
    display: inline-block;
    color: #fff;
  `,

    text13c1: css`
    text-align: center;
    text-decoration: inherit;
    border-color: #1c59a5;
    display: inline-block;
  `,

    text13c2: css`
    padding: 10px;
    line-height: 1.2em;
  `,

    text13c3: css`
    text-align: left;
    white-space: normal;
  `,

    text14c1: css`
    position: static;
    border: 0 none;
  `,

    text14c2: css`
    border: none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    text-align: center;
    color: inherit;
  `,

    text14c3: css`
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: top;
    border-radius: 100%;
    margin-top: 0.7em;
    color: #fff;
  `,

    text14c4: css`
    display: inline-block;
    vertical-align: middle;
    padding-right: 5px;
    padding-left: 5px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 0.5em;
    font-size: 1.2em;
    font-family: inherit;
    text-align: left;
    text-decoration: inherit;
    color: inherit;
    height: 2em;
    line-height: 2em;
    max-width: 80% !important;
  `,

    text14c5: css`
    width: 1em;
    height: 1em;
    margin-bottom: 0.7em;
    border-radius: 100%;
    display: inline-block;
    vertical-align: bottom;
    color: #fff;
  `,

    text14c6: css`
    width: 0;
    height: 0;
    clear: both;
  `,

    text15c1: css`
    position: static;
    border: 0 none;
  `,

    text15c2: css`
    margin-right: auto;
    margin-left: auto;
  `,

    text15c3: css`
    border-left-width: 6px;
    border-right-width: 0;
    border-left-style: solid;
    display: inline-block;
    float: left;
    color: inherit;
    margin-top: 8px;
    border-bottom-width: 6px !important;
    border-top-width: 6px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
  `,

    text15c4: css`
    border-left-width: 6px;
    border-right-width: 0;
    border-left-style: solid;

    display: inline-block;
    float: left;
    color: inherit;
    margin-top: 8px;
    border-bottom-width: 6px !important;
    border-top-width: 6px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
  `,

    text15c5: css`
    border-left-width: 20px;
    border-right-width: 0;
    border-left-style: solid;
    display: inline-block;
    float: left;
    color: inherit;
    border-bottom-width: 15px !important;
    border-top-width: 15px !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
  `,

    text15c6: css`
    display: inline-block;
    margin-left: 10px;
    color: inherit;
    line-height: 2.3em;
  `,

    text16c1: css`
    border: 0 none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0;
  `,

    text16c2: css`
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: top;
    border-radius: 100%;
    margin-top: 0.7em;
  `,

    text16c3: css`
    display: inline-block;
    vertical-align: middle;
    padding: 3px 5px;
    margin-right: 5px;
    margin-left: 5px;

    border-radius: 0.5em;
    font-size: 1.2em;
    font-family: inherit;
    text-decoration: inherit;
    max-width: 90% !important;
    color: #797979;
  `,

    text17c1: css`
    position: static;
    border: 0 none;
  `,

    text17c2: css`
    clear: both;
    border: 0 none;
    margin-top: 1em;
    margin-bottom: 0.5em;
  `,

    text17c3: css`
    border-top: 2px solid;
    font-size: 1em;
    font-weight: inherit;
    text-decoration: inherit;
  `,

    text17c4: css`
    padding-right: 0.5em;
    padding-left: 0.5em;

    display: inline-block;
  `,

    text18c1: css`
    margin-top: 2px;
    margin-bottom: 2px;
  `,

    text18c2: css`
    height: 6px;
    color: inherit;
  `,

    text18c3: css`
    height: 100%;
    width: 6px;
    float: left;
  `,

    text18c4: css`
    height: 100%;
    width: 6px;
    float: right;
  `,

    text18c5: css`
    color: #797979;
    margin: -1px 5px;
    padding: 4px;
  `,

    text18c6: css`
    padding: 1em;
  `,

    text19c1: css`
    border: none;
    margin: 5px auto;
  `,

    text19c2: css`
    color: #797979;
    font-size: 20px;
    text-align: center;
    margin-right: auto;
    margin-bottom: -2px;
    margin-left: auto;
    border-radius: 5px;
    padding: 5px 5px 15px;
  `,

    text19c3: css`
    width: 0;
    margin-right: auto;
    margin-left: auto;
    border-top-width: 0.6em;
    border-top-style: solid;
    height: 10px;
    color: inherit;
    border-left-width: 0.7em !important;
    border-left-style: solid !important;
    border-left-color: transparent !important;
    border-right-width: 0.7em !important;
    border-right-style: solid !important;
    border-right-color: transparent !important;
  `,

    text19c4: css`
    width: 0;
    margin-right: auto;
    margin-left: auto;
    border-top-width: 0.6em;
    border-top-style: solid;
    border-bottom-color: #fefefe;
    border-top-color: #fefefe;
    height: 10px;
    margin-top: -12px;
    color: inherit;
    border-left-width: 0.7em !important;
    border-left-style: solid !important;
    border-left-color: transparent !important;
    border-right-width: 0.7em !important;
    border-right-style: solid !important;
    border-right-color: transparent !important;
  `,

    text20c1: css`
    margin: 3px;
    line-height: 24px;
  `,

    text20c2: css`
    clear: both;
    color: inherit;
  `,

    text20c3: css`
    color: inherit;
    float: right;
    width: 10px;
    margin-bottom: -3px;
    border-color: #8ac1e2;
    margin-right: 10px;
    height: 10px !important;
  `,

    text20c4: css`
    color: inherit;
    float: left;
    width: 10px;
    margin-bottom: -3px;
    border-color: #8ac1e2;
    height: 10px !important;
  `,

    text20c5: css`
    padding-top: 10px;
    color: inherit;
  `,

    text20c6: css`
    color: inherit;
    float: right;
    width: 10px;
    margin-bottom: -2px;
    border-color: #8ac1e2;
    height: 10px !important;
  `,

    text20c7: css`
    padding: 20px 10px 10px;
    color: inherit;
  `,

    text20c8: css`
    color: #797979;
    white-space: normal;
  `,

    text20c9: css`
    color: inherit;
    width: 10px;
    margin-bottom: -2px;
    border-color: #8ac1e2;

    height: 10px !important;
  `,

    text20c10: css`
    color: inherit;
    width: 10px;
    margin-bottom: -2px;
    border-color: #8ac1e2;
    margin-left: 10px;

    height: 10px !important;
  `,

    text20c11: css`
    clear: both;
    color: inherit;
  `,

    text20c12: css`
    color: inherit;
    float: right;
    width: 10px;
    margin-bottom: -3px;
    border-color: #8ac1e2;

    height: 10px !important;
  `,

    text20c13: css`
    color: inherit;
    width: 10px;
    margin-bottom: -2px;
    border-color: #8ac1e2;

    height: 10px !important;
  `,

    text21c1: css`
    margin: 5px auto;
    color: #fff;
  `,

    text21c2: css`
    clear: both;
    color: inherit;
  `,

    text21c3: css`
    color: inherit;
    float: right;
    width: 11px;
    margin-top: -2px;
    margin-right: -2px;
    height: 11px !important;
  `,

    text21c4: css`
    color: inherit;
    float: left;
    width: 11px;
    margin-top: -2px;

    margin-left: -2px;
    height: 11px !important;
  `,

    text21c5: css`
    padding-top: 10px;
    color: inherit;
    border-color: #cd433b;
  `,

    text21c6: css`
    padding: 10px;
  `,

    text21c7: css`
    text-align: center;
    color: #797979;
    line-height: 1.75em;
    white-space: normal;
  `,

    text21c8: css`
    margin-bottom: -2px;
    padding-top: 10px;
    color: inherit;
    border-color: #cd433b;
  `,

    text21c9: css`
    color: inherit;
    float: right;
    width: 12px;

    margin-right: -2px;
    height: 11px !important;
  `,

    text21c10: css`
    color: inherit;
    width: 12px;
    margin-left: -2px;
    height: 11px !important;
  `,

    text22c1: css`
    margin: 10px auto;
  `,

    text22c2: css`
    display: inline-block;
    width: 100%;
    line-height: 0;
    color: #fff;
  `,

    text22c3: css`
    height: 8px;
    margin-top: -8px;
    margin-bottom: -8px;
  `,

    text22c4: css`
    margin-right: auto;
    margin-bottom: -8px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #88bfb1;
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: #fefefe;
  `,

    text22c5: css`
    margin-top: 4px;
    margin-right: -4px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #88bfb1;
    display: inline-block;
    height: 10px;
    width: 10px;
    float: right;
    background-color: #fefefe;
  `,

    text22c6: css`
    padding: 2px;
    line-height: 2em;
    border: 1px solid #fefefe;
    font-size: 14px;
    margin-top: 14px;
    margin-right: 10px;
    margin-left: 10px;
  `,

    text22c7: css`
    padding: 6px;
    line-height: 2em;
    border: 1px solid #fefefe;
  `,

    text22c8: css`
    margin-right: auto;
    margin-bottom: -10px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #88bfb1;
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: #fefefe;
  `,

    text22c9: css`
    margin: 6px -4px -4px;
    border-radius: 100%;
    line-height: 1;
    border-color: #88bfb1;
    display: inline-block;
    height: 10px;
    width: 10px;
    float: right;
    background-color: #fefefe;
  `,

    text23c1: css`
    width: 4em;
    margin-top: 1.9em;
    margin-bottom: -1.8em;
    margin-left: -1em;
  `,

    text23c2: css`
    height: 5em;
    padding-left: 10px;
  `,

    text23c3: css`
    padding-top: 25px;
    padding-bottom: 10px;
    margin-top: -4em;
    margin-left: 1.1em;
    margin-right: 2.1em;
  `,

    text23c4: css`
    color: #797979;
    white-space: normal;
  `,

    text23c5: css`
    margin-top: -4.8em;
    margin-bottom: 1em;
  `,

    text23c6: css`
    height: 5em;
    margin-top: 1.9em;
    margin-bottom: -1.8em;
    margin-left: -1em;
  `,

    text23c7: css`
    width: 4em;
    float: right;
  `,

    text24c1: css`
    border: 0;
    margin-top: 2px;
    margin-bottom: 2px;
  `,

    text24c2: css`
    height: 6px;
    color: inherit;
  `,

    text24c3: css`
    height: 100%;
    width: 6px;
    float: left;
    border-top: 2px solid;
    border-left: 2px solid;
    color: inherit;
  `,

    text24c4: css`
    height: 100%;
    width: 6px;
    float: right;
    border-top: 2px solid;
    border-right: 2px solid;
    color: inherit;
  `,

    text24c5: css`
    display: inline-block;
    color: #757576;
    clear: both;
    border-color: #757576;
  `,

    text24c6: css`
    margin: -1px 4px;
    padding: 0.8em;
    color: inherit;
  `,

    text24c7: css`
    color: #797979;
    font-size: 1em;
    line-height: 1.4;
    word-break: break-all;
  `,

    text24c8: css`
    height: 6px;
    color: inherit;
  `,

    text24c9: css`
    height: 100%;
    width: 6px;
    float: left;
    border-bottom: 2px solid;
    border-left: 2px solid;
    color: inherit;
  `,

    text24c10: css`
    height: 100%;
    width: 6px;
    float: right;
    border-right: 2px solid;
    border-bottom: 2px solid;
    color: inherit;
  `,

    text25c1: css`
    padding: 15px 20px;
    color: #666;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 20px;
    word-break: break-all;
  `,

    text25c2: css`
    color: #797979;
    white-space: normal;
  `,

    text26c1: css`
    white-space: normal;
    font-size: 14px;
    margin: 2px auto;
    padding: 10px;
  `,

    text27c1: css`
    border: 0;
    margin: 5px auto;
  `,

    text27c2: css`
    height: 25px;
    color: inherit;
  `,

    text27c3: css`
    height: 100%;
    width: 50px;
    float: left;
    border-top: 2px solid;
    border-left: 2px solid;
    color: inherit;
  `,

    text27c4: css`
    display: inline-block;
    color: #ac1d10;
    clear: both;
  `,

    text27c5: css`
    margin: -0.8em 0.3em;
    padding: 0.8em;
    color: inherit;
  `,

    text27c6: css`
    color: #797979;
    font-size: 1em;
    line-height: 1.75em;
    word-break: break-all;
    text-align: justify;
    white-space: normal;
  `,

    text27c7: css`
    height: 25px;
    color: inherit;
  `,

    text27c8: css`
    height: 100%;
    width: 50px;
    float: right;
    border-right: 2px solid;
    border-bottom: 2px solid;
    color: inherit;
  `,

    text28c1: css`
    height: 6px;
  `,

    text28c2: css`
    height: 100%;
    width: 6px;
    float: left;
  `,

    text28c3: css`
    height: 100%;
    width: 6px;
    float: right;
  `,

    text28c4: css`
    margin: -1px 5px;
    padding: 1em;
  `,

    text28c5: css`
    color: #797979;
    white-space: normal;
  `,

    text28c6: css`
    height: 6px;
    color: inherit;
  `,

    text28c7: css`
    height: 100%;
    width: 6px;
    float: left;
  `,

    text28c8: css`
    height: 100%;
    width: 6px;
    float: right;
  `,

    text29c1: css`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  `,

    text29c2: css`
    margin-bottom: -19px;
    -webkit-transform: rotate(0deg);
    display: inline-block;
  `,

    text29c3: css`
    margin-right: auto;
    margin-left: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: table-cell;
    vertical-align: middle;
  `,

    text29c4: css`
    font-size: 18px;
  `,

    text29c5: css`
    margin-bottom: -16px;
    padding: 20px 10px;

    color: #333332;
  `,

    text29c6: css`
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
    font-size: 14px;
    text-align: justify;
    line-height: 1.5em;
    text-indent: 2em;
  `,

    text29c7: css`
    color: #797979;
  `,

    text29c8: css`
    -webkit-transform: rotate(0deg);
    display: inline-block;
  `,

    text29c9: css`
    margin-right: auto;
    margin-left: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: table-cell;
    vertical-align: middle;
  `,

    text29c10: css`
    font-size: 18px;
  `,

    text30c1: css`
    margin: 5px auto;
    color: #fff;
  `,

    text30c2: css`
    clear: both;
    color: inherit;
  `,

    text30c3: css`
    color: inherit;
    float: right;
    width: 12px;
    margin-top: -1px;
    margin-right: -1px;
    background-color: #fefefe;
    height: 11px !important;
  `,

    text30c4: css`
    color: inherit;
    float: left;
    width: 11px;
    margin-top: -1px;
    margin-left: -1px;
    background-color: #fefefe;
    height: 11px !important;
  `,

    text30c5: css`
    padding-top: 10px;
    color: inherit;
  `,

    text30c6: css`
    color: inherit;
    float: right;
    width: 11px;
    margin-top: -1px;
    margin-right: 10px;
    height: 11px !important;
  `,

    text30c7: css`
    color: inherit;
    float: left;
    width: 11px;
    margin-left: 9px;
    margin-top: -1px;
    height: 11px !important;
  `,

    text30c8: css`
    padding-top: 10px;
    color: inherit;
  `,

    text30c9: css`
    padding: 20px;
  `,

    text30c10: css`
    text-align: justify;
    color: #797979;
    line-height: 1.75em;
    white-space: normal;
  `,

    text30c11: css`
    color: inherit;
  `,

    text30c12: css`
    color: inherit;
    float: right;
    width: 11px;
    margin-top: -1px;
    margin-right: 10px;
    height: 11px !important;
  `,

    text30c13: css`
    color: inherit;
    float: left;
    width: 11px;
    margin-top: -1px;
    margin-left: 10px;
    height: 11px !important;
  `,

    text30c14: css`
    margin-bottom: -1px;
    padding-top: 10px;
    color: inherit;
  `,

    text30c15: css`
    color: inherit;
    float: right;
    width: 12px;
    margin-top: -1px;
    margin-right: -1px;
    background-color: #fefefe;
    height: 11px !important;
  `,

    text30c16: css`
    color: inherit;
    float: left;
    width: 11px;
    margin-top: -1px;
    height: 11px !important;
  `,

    text30c17: css`
    width: 12px;
    margin-top: -1px;
    background-color: #fefefe;
    margin-left: -1px;
    height: 11px !important;
  `,

    text31c1: css`
    font-size: 14px;
    font-family: Microsoft YaHei, serif;
    margin: 5px auto;
  `,

    text31c2: css`
    margin-top: 10px;
    margin-bottom: 10px;
  `,

    text31c3: css`
    margin-left: 22px;
    margin-bottom: -2px;
    -webkit-transform: rotate(0deg);
  `,

    text31c4: css`
    margin-left: 1px;
    width: 15px;
    height: 15px;
    border-width: 2px 2px 0 0;
    border-style: solid;

    -webkit-transform: rotate(-45deg);
  `,

    text31c5: css`
    margin-top: -8px;
    width: 17px;
    height: 15px;
    border-width: 0 2px;
    border-style: solid;
  `,

    text31c6: css`
    margin-right: auto;
    margin-bottom: -2px;
    margin-left: auto;
    padding: 5px 10px;
    border-radius: 5px;

    border-image-source: none;
    color: inherit;
  `,

    text31c7: css`
    font-size: 14px;
    color: #3b3c3c;
    line-height: 1.5em;
    text-indent: 2em;
    text-align: justify;
  `,

    text31c8: css`
    color: #797979;
    font-family: Microsoft YaHei, serif, Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 24px;
  `,

    text32c1: css`
    margin: 3px auto;
    padding: 10px;
    color: #3e3e3e;
    line-height: 24px;

    border-radius: 8px;
  `,

    text32c2: css`
    border: 0 none #1e9be8;
    clear: both;
    color: inherit;
  `,

    text32c3: css`
    color: #fff;
    float: right;
    width: 6px;
    border-radius: 50%;
    margin-bottom: -3px;
    box-shadow: #757575 0 0 5px;
    height: 6px !important;
  `,

    text32c4: css`
    color: #fff;
    width: 6px;
    border-radius: 50%;
    margin-bottom: -2px;
    box-shadow: #757575 0 0 5px;
    height: 6px !important;
  `,

    text32c5: css`
    padding: 10px;
  `,

    text32c6: css`
    color: #797979;
    text-align: center;
    white-space: normal;
  `,

    text32c7: css`
    border: 0 none #1e9be8;
    clear: both;
    color: inherit;
  `,

    text32c8: css`
    color: #fff;
    float: right;
    width: 6px;
    border-radius: 50%;
    margin-bottom: -3px;
    box-shadow: #757575 0 0 5px;

    height: 6px !important;
  `,

    text32c9: css`
    color: #fff;
    width: 6px;
    border-radius: 50%;
    margin-bottom: -2px;
    box-shadow: #757575 0 0 5px;
    height: 6px !important;
  `,

    text33c1: css`
    border: 0 none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    text-align: center;
    font-family: inherit;
    text-decoration: inherit;
    padding: 0;
  `,

    text33c2: css`
    width: 100%;
    display: inline-block;
    vertical-align: top;
  `,

    text33c3: css`
    width: 100%;
  `,

    text33c4: css`
    width: 0;
    border-top-width: 1em;
    border-top-style: solid;

    float: left;
    border-left-width: 1em;
    border-left-style: solid;

    border-right-width: 1em !important;
    border-right-style: solid !important;
    border-right-color: transparent !important;
    border-bottom-width: 1em !important;
    border-bottom-style: solid !important;
    border-bottom-color: transparent !important;
  `,

    text33c5: css`
    width: 0;
    border-top-width: 1em;
    border-top-style: solid;
    float: right;
    border-right-width: 1em;
    border-right-style: solid;
    border-left-width: 1em !important;
    border-left-style: solid !important;
    border-left-color: transparent !important;
    border-bottom-width: 1em !important;
    border-bottom-style: solid !important;
    border-bottom-color: transparent !important;
  `,

    text33c6: css`
    color: #797979;
    width: 100%;
    padding-top: 2em;
    padding-right: 0.5em;
    padding-left: 0.5em;
  `,

    text33c7: css`
    display: inline-block;
    vertical-align: top;
    width: 100%;
  `,

    text33c8: css`
    width: 0;
    float: left;
    border-left-width: 1em;
    border-left-style: solid;
    border-bottom-width: 1em;
    border-bottom-style: solid;
    border-top-width: 1em !important;
    border-top-style: solid !important;
    border-top-color: transparent !important;
    border-right-width: 1em !important;
    border-right-style: solid !important;
    border-right-color: transparent !important;
  `,

    text33c9: css`
    width: 0;
    float: right;
    display: inline-block;
    border-right-width: 1em;
    border-right-style: solid;
    border-bottom-width: 1em;
    border-bottom-style: solid;
    border-top-width: 1em !important;
    border-top-style: solid !important;
    border-top-color: transparent !important;
    border-left-width: 1em !important;
    border-left-style: solid !important;
    border-left-color: transparent !important;
  `,

    text34c1: css`
    border: 0 none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0;
  `,

    text34c2: css`
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 100%;
  `,

    text34c3: css`
    color: #797979;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    width: 100%;
    border-bottom: 1px solid;
    border-left: 1px solid;
    vertical-align: bottom;
    font-size: 1em;
    font-family: inherit;
    text-decoration: inherit;
  `,

    text34c4: css`
    width: 6px;
    height: 6px;
    float: right;
    margin-top: -3px;
    border-radius: 100%;
  `,

    text35c1: css`
    margin: 10px auto;
  `,

    text35c2: css`
    display: inline-block;
    width: 100%;
    line-height: 0;
  `,

    text35c3: css`
    height: 8px;
    margin-top: -8px;
    margin-bottom: -8px;
  `,

    text35c4: css`
    margin-right: auto;
    margin-bottom: -8px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #f87a7a;
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: #fefefe;
  `,

    text35c5: css`
    margin-top: 4px;
    margin-right: -4px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #f87a7a;
    display: inline-block;
    height: 10px;
    width: 10px;
    float: right;
    background-color: #fefefe;
  `,

    text35c6: css`
    line-height: 2em;
    font-size: 14px;
    margin-top: 14px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 6px;
  `,

    text35c7: css`
    color: #fff;
    white-space: normal;
  `,

    text35c8: css`
    margin-right: auto;
    margin-bottom: -10px;
    margin-left: -4px;
    border-radius: 100%;
    line-height: 1;
    text-decoration: inherit;
    border-color: #f87a7a;
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: #fefefe;
  `,

    text35c9: css`
    margin: 6px -4px -4px;
    border-radius: 100%;
    line-height: 1;
    border-color: #f87a7a;
    display: inline-block;
    height: 10px;
    width: 10px;
    float: right;
    background-color: #fefefe;
  `
};

export default style;