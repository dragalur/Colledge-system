import { Lector } from '../model/lector.js';
import { Department } from '../model/department.js';

export async function getLectors(req, res, next) {
  try {
    const lector = await Lector.find();
    res.json(lector);
  } catch (e) {
    console.log(e);
  }
}

export async function getDepartments(req, res, next) {
  try {
    const department = await Department.find();
    res.json(department);
  } catch (e) {
    console.log(e);
  }
}
