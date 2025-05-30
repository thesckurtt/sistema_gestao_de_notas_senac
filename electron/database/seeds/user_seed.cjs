const { faker } = require('@faker-js/faker');
const bcryptjs = require('bcryptjs')
exports.seed = async function (knex) {
  // Limpa a tabela antes de inserir dados
  await knex('users').del();

  const users = [];

  for (let i = 0; i < 10; i++) {
    // const hashedPassword = await bcryptjs.hash(faker.internet.password(10), 10); // 10 rounds de salt
    const hashedPassword = await bcryptjs.hash("teste", 10); // 10 rounds de salt

    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: hashedPassword // senha aleatória (texto simples)
    });
  }

  await knex('users').insert(users);
};
