

function uri(a,b) { return `https://script.google.com/macros/s/AKfycbysE_CYULy4KQDBBZSVxHPrp4ApfP25A2BjK4oDdT1JDvc3h6Fl/exec?x=${a}&y=${b}` }


 exports.GAS = async function (context, props) {
 	
  await  fetch(uri(props.error,context))
  
}