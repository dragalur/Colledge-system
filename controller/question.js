import { Lector } from '../model/lector.js';
import { Department } from '../model/department.js';

export async function head(req, res, next) {
  try {
    const { name } = req.params;
    const dep = await Department.findOne({ name });
    if (!dep) return res.json({ message: 'Department is not found' });

    const head = await Lector.findById({ _id: dep.head });
    res.json({ message: `Head of ${name} department is ${head.name}` });
  } catch (e) {
    console.log(e);
  }
}

export async function statistic(req, res, next) {
  try {
    const { name } = req.params;
    const dep = await Department.findOne({ name });
    if (!dep) return res.json({ message: 'Department is not found' });

    const mes = await dep.getStatistic();
    res.json(mes);
  } catch (e) {
    console.log(e);
  }
}

export async function salary(req, res, next) {
  try {
    const { name } = req.params;
    const dep = await Department.findOne({ name });
    if (!dep) return res.json({ message: 'Department is not found' });

    const mes = await dep.getSalary();
    res.json({
      message: `The average salary of ${name} is ${Math.round(mes)}$`,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function count(req, res, next) {
  try {
    const { name } = req.params;
    const dep = await Department.findOne({ name });
    if (!dep) return res.json({ message: 'Department is not found' });

    res.json({
      message: `${name} department has ${dep.userId.length} workers.`,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function search(req, res, next) {
  try {
    const { name: expression } = req.params;
    const dep = await Lector.find({
      name: { $regex: expression, $options: 'i' },
    });
    if (!dep) return res.json({ message: 'Department is not found' });

    let names = '';
    [].forEach.call(dep, (item) => (names += item.name + ', '));
    names = names.slice(0, names.length - 2);

    res.json({ message: names });
  } catch (e) {
    console.log(e);
  }
}
