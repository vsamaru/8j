

 exports.TG = async function (o) {

      if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

let uri = "https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o


  const res = await fetch( uri )
  return res.json()
}





  // export default async function (...args) {
//   const res = await fetch(...args)
//   return res.json()
// }