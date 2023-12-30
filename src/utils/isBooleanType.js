export const isBooleanType = (data) => {
  if (typeof data !== "boolean"){
    return "not boolean"
  } else {
    return "boolean" 
  }
}