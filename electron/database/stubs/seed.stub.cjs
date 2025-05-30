const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  // Limpa a tabela antes de inserir dados
  await knex('table').del();

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(10) // senha aleatória (texto simples)
    });
  }

  await knex('table').insert(users);
};
