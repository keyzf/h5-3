const GetUrlPara = search_string => {
  let url = document.location.toString();
  let arr = url.substring(url.indexOf('?') + 1, url.length).split('&');
  let search_data = '';
  arr.map(data => {
    if (data.substring(0, data.indexOf('=')) === search_string)
      search_data = data.substring(data.indexOf('=') + 1, data.length);
    return search_data;
  });
  return search_data;
};

export { GetUrlPara };
