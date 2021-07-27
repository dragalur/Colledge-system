import { Lector } from '../model/lector.js';
import { Department } from '../model/department.js';

export async function addLector(req, res, next) {
  const { name, degree, average } = req.body;
  const lector = new Lector({ name, degree, average });
  await lector.save();
  res.json(lector);
}

export async function addDepartment(req, res, next) {
  try {
    const { name, head, userId } = req.body;
    const department = new Department({ name, head, userId });
    await department.save();
    res.json(department);
  } catch (e) {
    console.log(e);
  }
}
