import mongoose from "mongoose";
import bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;

const users_schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  last_login: {
    type: Date,
    default: () => Date.now()
  },
  last_update: {
    type: Date
  }
});

// before save password in DB hash and salt it
users_schema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;

    return next();
  } catch (err) {
    return next(err);
  }
});

// hash and salt password and check if it match with the value in DB
users_schema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

//////////
const users_model = new mongoose.model("users", users_schema);
export default users_model;