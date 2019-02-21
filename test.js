var Module = ( function() {
  var _foo = function() {
    console.log( "Woooooo Tesssst 234522222226" );
  };
  
  return {
    doIt : _foo
  };
} )();

// module.exports is available only when testing in nodejs:
if ( typeof module !== 'undefined' && typeof module.exports !== 'undefined' )
{
  module.exports.Module = Module;
}
