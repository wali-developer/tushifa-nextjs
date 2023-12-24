const getHeader = (formData = false) => {
  const header = formData
    ? {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    : {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
  return header;
};

export default getHeader;
