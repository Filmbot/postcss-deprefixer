var postcss = require('postcss');


module.exports = postcss.plugin( 'postcss-deprefixer', function( /*opts*/ ) {
  // this changes use of display: *box to use final spec display: flex
  return function( css ) {
    css.walk( function( node ) {
      if (node.type === 'decl' && node.prop === 'display' && /^(\-[^\-]+\-)?box$/.test(node.value)) {
        var next = node.next();
        if (!!next && next.type === 'comment' && next.text === 'deprefixer: off') {
          return;
        }
        node.value = 'flex';
      }
    } );
  }

});
