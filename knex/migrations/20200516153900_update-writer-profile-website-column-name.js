
exports.up = function(knex) {
  return knex.schema.table('writer_profiles', tbl => {
    tbl.renameColumn('website_url', 'website');
  })
};

exports.down = function(knex) {
  return knex.schema.table('writer_profiles', tbl => {
    tbl.renameColumn('website', 'website_url');
  })
};
