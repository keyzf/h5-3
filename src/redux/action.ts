const RxAction = (type: string, data: any) => {
  return {
    type: type,
    payload: data,
  };
};

export default RxAction;