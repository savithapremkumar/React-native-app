import { createActions } from 'reduxsauce'
//This is purely for actions which need to happen before authloadingscreen

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators
