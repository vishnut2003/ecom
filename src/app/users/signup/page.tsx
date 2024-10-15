import SignupForm from "@/components/SignupForm/SignupForm"

const signup = () => {
  return (
    <div className='bg-white rounded-md overflow-hidden shadow-sm flex max-w-screen-md w-full items-stretch'>

      {/* Col 1 */}
      <div className='w-3/4 bg-blue-500 p-10 flex flex-col gap-3'>
        <h2 className='text-2xl font-semibold text-white'>Looks like you're new here!</h2>
        <p className='text-base text-blue-100'>Sign up with your mobile number to get started</p>
      </div>

      {/* Col 2 */}
      <div className='w-full bg-white p-10'>
          <div>
            <SignupForm />
          </div>
      </div>
    </div>
  )
}

export default signup