import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Main = lazy(() => import('./../layout'))
const CreateAccount = lazy(() => import('pages/CreateAccount'))
const NotFound = lazy(() => import('components/NotFound'))
const IndividualAccount = lazy(() => import('pages/IndividualAccount'))
const CompleteProfile = lazy(() => import('pages/CompleteProfile'))
const Profile = lazy(() => import('pages/Profile'))

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<CreateAccount />}>
            <Route path="individual-account" element={<IndividualAccount />} />
            <Route path="complete-profile" element={<CompleteProfile />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AllRoutes
