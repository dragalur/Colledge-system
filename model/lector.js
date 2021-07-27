import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  degree: { type: String, required: true },
  average: { type: Number, required: true },
});

userSchema.methods = {
  createUserAchive: async function () {},
};

export const Lector = mongoose.model('lector', userSchema);
