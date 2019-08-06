let id = 0;
let red = 0;
export const create = data => {
  return {
    type: "CREATE",
    id: id++,
    payload: data
  };
};
export const del = data => {
  return {
    type: "DELETE",
    payload: data,
    id: red++
  };
};
export const toggle = (data,indx) => {
    return {
      type: "TOGGLE",
      payload: data,
      indx:indx
    };
  };
