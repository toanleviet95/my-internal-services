const feathers = require('@feathersjs/feathers');

const app = feathers();

app.use('todos', {
  async get(name) {
    return {
      name,
      text: `Hello ${name}`,
    };
  },
});

async function getTodo(name) {
  const service = app.service('todos');
  const todos = await service.get(name);
  console.log(todos);
}

getTodo('Toan');
