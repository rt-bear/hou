
function $import (file) {
  return () =>
    import(`views/${file}`)
}

export {
  $import
}
