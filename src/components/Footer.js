import React from 'react'
import Logo from '../image/logo.png'
import '../css/tailwind.css'
import '../App.css'
import { GithubFilled, TwitterCircleFilled } from '@ant-design/icons'
// import 'bulma/css/bulma.css'
function Footer () {
  return (
    <>
      <div className="mtop">
        <div className="container py-8">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/3 ">
              <img src={Logo} className="w-64 " alt="popschools" />
            </div>

            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                  <p className="py-3 px-3 text-gray-600 font-bold">
                    On Social Media
                  </p>
                  <p className="text-gray-600 py-4 px-3">
                    Follow us on our social media
                  </p>
                  <hr />

                  <a href="https://github.com/PopSchools/popschools.org">
                    <span className=" px-3 text-gray-600 text-4xl inline-block">
                      <GithubFilled />
                    </span>{' '}
                  </a>
                  <a href="https://twitter.com/popschoolsorg">
                    <span className="px-3 text-gray-600 text-4xl inline-block">
                      <TwitterCircleFilled />
                    </span>{' '}
                  </a>
                </div>

                <div>
                <p className="py-3 px-3 text-gray-600 font-bold">
                   Code of Conduct
                  </p>
                  <a href="/codeofconduct"> <span className="px-3 py-4 text-gray-600 text-sm inline-block">View Code</span></a>

                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="py-6">
                  <span className="text-left text-gray-600 py-2 px-3">
                    <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
                    {new Date().getFullYear()} PopSchools, Inc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
