const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: { type: String, required: true, unique: true },
  foundOn: {
    type: String,
    default: () => {
      const date = new Date();
      return `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
  },
});

module.exports = mongoose.model("Item", itemSchema);