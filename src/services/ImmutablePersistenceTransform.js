import R from 'ramda'
import Immutable from 'seamless-immutable'

// is this object already Immutable?
const isImmutable = R.has('asMutable')

// change this Immutable object into a JS object
const convertToJs = (state) => state.asMutable({deep: true})

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs)

// convert this JS object into an Immutable object
const toImmutable = (raw) => Immutable(raw)

// the transform interface that redux-persist is expecting
export default {
  out: (state) => {//called right  before state is rehydrated , the js obj is converted back to immutable
    // console.log({ retrieving: state })
    return toImmutable(state)
  },
  in: (raw) => {//called right before state is persisted, the immutable state is transformed to js obj
    // console.log({ storing: raw })
    return fromImmutable(raw)
  }
}
