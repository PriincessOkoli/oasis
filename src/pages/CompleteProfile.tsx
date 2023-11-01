import { Button, CircularProgress, MenuItem, Select, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { NIGERIAN_STATES } from 'types'
import yup from 'utils/yup'
import { useState } from 'react'

const validationSchema = yup.object().shape({
  phone_number: yup.string().required('enter phone number'),
  address: yup.string().required('enter address'),
  state: yup.string().required('select state'),
})
const validationBvnSchema = yup.object().shape({
  bvn: yup.string().required('enter phone bvn'),
})

function FormikFields() {
  const navigate = useNavigate()
  const [isBvn, setIsBvn] = useState(false)
  return (
    <Formik
      initialValues={{
        phone_number: '',
        address: '',
        state: '',
        bvn: '',
      }}
      validationSchema={!isBvn ? validationSchema : validationBvnSchema}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsBvn(true)
        if (isBvn) {
          navigate('/profile')
        }
      }}
    >
      {({ values, handleChange, isSubmitting, touched, errors, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {!isBvn && (
            <div className="w-full mb-6">
              <div className="w-full mb-4 space-y-4">
                <p className="text-md font-medium">Phone number</p>
                <TextField
                  id="Phone_number"
                  placeholder="please enter phone number"
                  type="text"
                  value={values.phone_number}
                  error={touched.phone_number && !!errors.phone_number}
                  helperText={
                    !!errors.phone_number && touched.phone_number ? 'enter phone number' : ''
                  }
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^[0-9]*$/.test(value) && value.length <= 11) {
                      setFieldValue('phone_number', e.target.value)
                    }
                  }}
                  inputProps={{
                    className: 'rounded-[11px] text-lg',
                  }}
                  fullWidth
                />{' '}
              </div>
              <div className="w-full space-y-4 mb-3">
                <p className="text-md font-medium  mt-5">Please enter address</p>
                <TextField
                  id="address"
                  type="text"
                  placeholder="please enter address"
                  value={values.address}
                  onChange={handleChange}
                  error={touched.address && !!errors.address}
                  helperText={touched.address ? errors.address : ''}
                  inputProps={{
                    className: 'rounded-[11px] text-lg',
                  }}
                  fullWidth
                />{' '}
              </div>
              <div className="w-full space-y-4 mb-3">
                <p className="text-md font-medium">state of residence</p>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="state_of_residence"
                    type="text"
                    className="text-lg"
                    value={values.state}
                    error={touched.state && !!errors.state}
                    onChange={(e) => setFieldValue('state', e.target.value)}
                    fullWidth
                  >
                    {NIGERIAN_STATES?.map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                  <small className="text-error text-xs ml-4">
                    {touched?.state && !!errors.state && 'Please select state'}
                  </small>
                </FormControl>
              </div>
            </div>
          )}
          {isBvn && (
            <div className="w-full mb-6">
              <div className="w-full space-y-4 mb-3">
                <p className="text-md font-medium  mt-5">Bank verification number (BVN)</p>
                <TextField
                  id="bvn"
                  type="text"
                  placeholder="please enter bvn"
                  value={values.bvn}
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^[0-9]*$/.test(value) && value.length <= 13) {
                      setFieldValue('bvn', e.target.value)
                    }
                  }}
                  error={touched.bvn && !!errors.bvn}
                  helperText={touched.bvn ? errors.bvn : ''}
                  inputProps={{
                    className: 'rounded-[11px] text-md',
                  }}
                  fullWidth
                />{' '}
              </div>
            </div>
          )}

          <Button disabled={isSubmitting} className="w-full bg-primary p-5" type="submit">
            {isSubmitting ? (
              <>
                <CircularProgress color="inherit" className="text-white" size={22} />
              </>
            ) : (
              'Save & Continue'
            )}
          </Button>
          <p className="text-xs font-xs text-light flex justify-center items-center mt-2">
            <LockOutlinedIcon className="text-sm" /> Your Info is safely secured
          </p>
        </form>
      )}
    </Formik>
  )
}
export default function CompleteProfile() {
  const navigate = useNavigate()

  return (
    <>
      <div className="mx-20 py-15 mt-10 hidden lg:block">
        <div className="w-5/6">
          <h1 className="text-2xl mb-4 text-black font-bold">Complete Your Profile!</h1>
          <p className="leading-7 text-lg mb-10">
            For the purpose of industry regulation, your details are required.
          </p>
          <FormikFields />
        </div>
      </div>
      <div className="p-5 w-full mt-5 block lg:hidden">
        <div className="">
          <h1 className="text-2xl mb-4 text-black font-bold">Complete Your Profile!</h1>
          <p className="leading-7 text-lg mb-10">
            For the purpose of industry regulation, your details are required.
          </p>
          <FormikFields />
        </div>
      </div>
    </>
  )
}
