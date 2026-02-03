module.exports = function(template, prod) {
  let output = template.replace("{{%NAME%}}", prod.model);
  output = output.replace("{{%STORAGE%}}", prod.storage);
  output = output.replace("{{%RAM%}}", prod.ram);
  output = output.replace("{{%PRICE%}}", prod.price);
  output = output.replace("{{%AVAILABLE%}}", prod.available);
  output = output.replace("{{%CAMERA%}}", prod.camera);
  output = output.replace("{{%BATTERY%}}", prod.battery);
  output = output.replace("{{%ID%}}", prod.id);

  return output;
}