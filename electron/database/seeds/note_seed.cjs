const { faker } = require('@faker-js/faker');
const path = require('node:path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

exports.seed = async function (knex) {

  // console.log(process.env.KNEX_NOTE_USER_EMAIL_TO_SEED)
  // const teste = await knex('users').where('email', process.env.KNEX_NOTE_USER_EMAIL_TO_SEED).first()
  // console.log(teste.id)
  if (process.env.KNEX_NOTE_DELETE_ALL === 'true') {
    await knex('notes').del();
  }

  let response = await knex('users').where('email', process.env.KNEX_NOTE_USER_EMAIL_TO_SEED).first();
  if (!response) {
    response = await knex('users').select('*').first();
  }
  const user = response;
  // console.log(user)

  const notes = [];

  for (let i = 0; i < 1; i++) {
    notes.push({
      title: faker.lorem.words(3),
      content: faker.lorem.words(30),
      user_id: user.id || await (knex('users').first()).id
    });
  }

  await knex('notes').insert(notes);
};
