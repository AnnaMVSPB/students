/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Anya',
        email: 'anya@anya',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test',
        email: 'test@test',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
