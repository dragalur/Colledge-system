import mongoose from 'mongoose';
const { Schema } = mongoose;
import { Lector } from '../model/lector.js';

const userSchema = new Schema({
  name: { type: String, required: true },
  head: { type: mongoose.Types.ObjectId },
  userId: { type: Array },
});

userSchema.methods = {
  getStatistic: async function () {
    let prof = 0,
      asis = 0,
      profAsis = 0;

    for (let _id of this.userId) {
      const lector = await Lector.findOne({ _id });
      lector.degree === 'professor'
        ? prof++
        : lector.degree === 'associate professor'
        ? profAsis++
        : asis++;
    }

    return {
      message: `Prof: ${prof}, Asistent prof: ${profAsis}, Asis: ${asis}.`,
    };
  },

  getSalary: async function () {
    let salary = 0;
    for (let _id of this.userId) {
      const lector = await Lector.findOne({ _id }).select('average -_id');
      salary += lector.average;
    }
    return salary / this.userId.length;
  },
};

export const Department = mongoose.model('department', userSchema);
