if ('WebAssembly' in window) {
  // Set the import object in instantiateStreaming
  WebAssembly.instantiateStreaming(fetch('wasm/classes.wasm'))
  .then(result => {

  //the Purpse of Life is:
	result = result.instance.exports.thePurposeOfLife();
	document.getElementById('wasm').innerHTML =
	'The Purpose of life according to teavm wasm from java: ' + result;
  });
}
