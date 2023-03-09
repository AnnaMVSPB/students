/** @type {import('sequelize-cli').Migration} */
const data = require('../dataStudent');

module.exports = {
  async up(queryInterface) {
    const arrStudents = data.map((el) => (
      {
        ...el,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Students', arrStudents, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
