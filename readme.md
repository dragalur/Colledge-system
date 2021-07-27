### Simple college system API

A simple node.js project with the console interface for the university, which consists of departments and lectors. The lectors could work in more than one department. A lector could have one degree (assistant, associate professor, professor).

You can check CLI interface choosing question and typing data for searching.  
`Name of department`: IT, Management, Economics.

## Endpoints

- User  
  `GET /api/head/:name` - receive message with head of department  
  `GET /api/statistic/:name` - receive data with count of assistant, professor and assistant professor  
  `GET /api/salary/:name` - receive the average salary for department  
  `GET /api/count/:name` - receive count of workers in department  
  `GET /api/search/:name` - search people into DB by expression

- Data from DB  
  `GET /lectorAll` - get all workers  
  `GET /depAll` - get all department
