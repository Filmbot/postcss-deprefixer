var postcss = require('postcss');


module.exports = postcss.plugin( 'postcss-deprefixer', function( opts ) {
  // this changes use of display: *box to use final spec display: flex
  return function( css ) {
    css.walkDecls( 'display', function( decl ) {
      if (/^(\-[^\-]+\-)?box$/.test(decl.value)) {
        decl.value = 'flex';
      }
    } );
  }

});
