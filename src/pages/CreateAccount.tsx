import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import { Link, Outlet, useNavigate, useMatch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PageTransition from 'components/PageTransition'
import { Button, IconButton } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material'

export default function CreateAccount() {
  const navigate = useNavigate()
  const isPage = !!useMatch('/')
  const isIndividualPage = !!useMatch('/individual-account')
  const isProfilePage = !!useMatch('/complete-profile')
  const isSubPage = isIndividualPage || isProfilePage

  return (
    <>
      <PageTransition show={!isPage}>
        <div className="bg-light lg:bg-white">
          <div className="flex justify-between items-center mx-2 mt-10 px-2 lg:text-lg">
            {isSubPage && (
              <header className="flex items-center mb-4">
                <Button
                  onClick={() => navigate(-1)}
                  className="p-0 hover:bg-transparent"
                  variant="text"
                  startIcon={<KeyboardArrowLeft className="text-primary text-md" />}
                >
                  <p className="hidden lg:block font-medium text-primary text-sm">Go back</p>
                </Button>
              </header>
            )} 
            <div className="flex flex-col">
              <p className="">
                {isIndividualPage ? 'STEP 01/02' : isProfilePage ? 'STEP 02/02' : ''}
              </p>
              <p className="text-md text-primary">
                {isIndividualPage ? 'Personal Info.' : isProfilePage ? 'Residency Info.' : ''}
              </p>
            </div>
          </div>

          <Outlet />
        </div>
      </PageTransition>
      <PageTransition show={isPage}>
        <div className='bg-light lg:bg-white'>
          <p className="lg:text-md mt-10 text-right px-5">
            Already have an account?{' '}
            <Link to={'sign-in'} className="text-primary">
              Sign In
            </Link>
          </p>
          <div className="py-10 px-20  mt-5 hidden lg:block">
            <div className="w-5/6">
              <h1 className="text-2xl mb-4 text-black font-bold">Join Us!</h1>
              <p className="leading-7 text-lg mb-10">
                To begin this journey, tell us what type of account you’d be opening.
              </p>
              <NavLink
                to="/individual-account"
                className={({ isActive }) =>
                  `flex justify-between py-7 px-5 shadow-md rounded-md hover:bg-light hover:border hover:border-[#1565D8E5]${
                    isActive ? 'bg-light border border-[#1565D8E5]' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="bg-primary p-5 text-white rounded-full">
                      <PersonOutlineOutlinedIcon />
                    </div>
                    <div className="flex flex-col mx-2">
                      <h1 className="text-black font-bold">Individual</h1>
                      <p>Personal account to manage all your activities.</p>
                    </div>
                    <ArrowRightAltIcon className="text-[#1565D8E5] text-xl" />
                  </>
                )}
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex justify-between py-7 px-5 shadow-md rounded-md mt-3 hover:bg-light hover:border hover:border-[#1565D8E5]${
                    isActive ? '' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="bg-primary p-5 text-white rounded-full">
                      <BusinessCenterOutlinedIcon />
                    </div>
                    <div className="flex flex-col mx-2">
                      <h1 className="text-black font-bold">Business</h1>
                      <p>Own or belong to a company, this is for you.</p>
                    </div>
                    <ArrowRightAltIcon className="text-[#1565D8E5] text-xl" />
                  </>
                )}
              </NavLink>
            </div>
          </div>
          <div className="p-5 w-full mt-10 block lg:hidden">
            <div className="">
              <h1 className="text-2xl mb-4 text-black font-bold">Join Us!</h1>
              <p className="leading-7 text-lg mb-10">
                To begin this journey, tell us what type of account you’d be opening.
              </p>
              <NavLink
                to="individual-account"
                className={({ isActive }) =>
                  `flex justify-between py-8 px-5 shadow-md rounded-md hover:bg-white hover:border hover:border-[#1565D8E5]${
                    isActive ? 'bg-white border border-[#1565D8E5]' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="bg-primary p-5 text-white rounded-full">
                      <PersonOutlineOutlinedIcon />
                    </div>
                    <div className="flex flex-col mx-2">
                      <h1 className="text-black font-bold">Individual</h1>
                      <p>Personal account to manage all your activities.</p>
                    </div>
                    <ArrowRightAltIcon className="text-[#1565D8E5] text-xl" />
                  </>
                )}
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex justify-between py-8 px-5 shadow-md rounded-md mt-3 hover:bg-light hover:border hover:border-[#1565D8E5]${
                    isActive ? '' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="bg-primary p-5 text-white rounded-full">
                      <BusinessCenterOutlinedIcon />
                    </div>
                    <div className="flex flex-col mx-2">
                      <h1 className="text-black font-bold">Business</h1>
                      <p>Own or belong to a company, this is for you.</p>
                    </div>
                    <ArrowRightAltIcon className="text-[#1565D8E5] text-xl" />
                  </>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  )
}
