'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let rows= [{
      username: 'admin',
      password: 'admin'
    }];

    rows.forEach(row => {
      row.createdAt = Sequelize.literal('NOW()');
      row.updatedAt = Sequelize.literal('NOW()');

    })
    await queryInterface.bulkInsert('Accounts',rows, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
