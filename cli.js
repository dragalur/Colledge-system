import inquirer from 'inquirer';
import fetch from 'node-fetch';

export async function cli(server) {
  if (!server) server = 'http://localhost:8080';
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'que',
        message: 'Make a choice: ',
        loop: true,
        choices: [
          'Who is head of department?',
          'Show department statistic',
          'Show the average salary for department',
          'Show count of employee for department',
          'Global search',
        ],
      },
    ])
    .then((answers) => {
      let url = choiceUrl(answers.que);

      inquirer
        .prompt([
          {
            type: 'input',
            message: answers.que + ' Type name.',
            name: 'name',
          },
        ])
        .then(async (ans) => {
          await fetch(server + url + ans.name)
            .then((respose) => respose.json())
            .then((v) => console.log('\x1b[35m', v.message));
          console.log('\n');
          setTimeout(() => cli(server), 2000);
          // cli(server);
        });
    });
}

function choiceUrl(answers) {
  let url;

  switch (answers) {
    case 'Who is head of department?':
      url = `/api/head/`;
      break;
    case 'Show department statistic':
      url = `/api/statistic/`;
      break;
    case 'Show the average salary for department':
      url = `/api/salary/`;
      break;
    case 'Show count of employee for department':
      url = `/api/count/`;
      break;
    case 'Global search':
      url = `/api/search/`;
      break;
  }
  return url;
}
