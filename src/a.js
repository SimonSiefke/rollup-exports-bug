exports.a = 1;

exports.c = async () => {
  const { JsonParsingError } = await import("./b.js");
  console.log(JsonParsingError);
  return exports.a;
};
