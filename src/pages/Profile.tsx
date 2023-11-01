import { ReactComponent as Success } from 'assets/icons/success.svg'
export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <>
      <div className="p-20 mt-5 hidden lg:block">
        <div className="w-5/6">
          <div className="flex justify-center mb-3">
            <Success />
          </div>
          <h1 className="text-2xl text-center mb-4 text-black font-bold">Welcome, {user?.name}!</h1>
          <p className="leading-7 text-lg">
            We are thrilled and ecstatic to welcome you to our team! Your decision to join us brings
            an incredible sense of enthusiasm and anticipation. We're excited about the incredible
            future we'll create together!
          </p>
        </div>
      </div>
      <div className="p-5 w-full mt-10 block lg:hidden">
        <div className="">
          <div className="flex justify-center">
            <Success />
          </div>
          <h1 className="text-2xl text-center mb-4 text-black font-bold">Welcome, {user?.name}!</h1>
          <p className="leading-7 text-lg">
            We are thrilled and ecstatic to welcome you to our team! Your decision to join us brings
            an incredible sense of enthusiasm and anticipation. We're excited about the incredible
            future we'll create together!
          </p>
        </div>
      </div>
    </>
  )
}
