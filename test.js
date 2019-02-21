var Module = ( function() {
  var _foo = function() {
    console.log( "Woooooo Tesssst 234522222226" );
  };
  
  return {
    doIt : _foo
  };
} )();

if ( module )
{
  module.exports.Module = Module;
}
