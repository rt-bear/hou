
function $import (file) {
  return resolve => require([`views/${file}`], resolve)
  // import(`views/${file}`)
}

export {
  $import
}
