import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'

import {Toaster} from 'react-hot-toast'
const Layout = ({children,title = 'Ecommerce App - Shop Now',description='mern stack project',keywords='mern,react,node,mongodb',authors='YashHaritash' }) => {
  return (
    <div class="row mx-sm-3 my-5">
            <div class="col-3"></div>
            <div class="col-6" id="container">
                <h1 class="text-center my-4" id="top"><i>Tinga URL</i></h1>
                <form class="form-inline">
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inp" class="sr-only">Password</label>
                        <input type="text" class="form-control" id="inp" placeholder="Enter URL"/>
                    </div>
                    <button type="button" class="btn btn-primary mb-2 mx-2" id="shorten">SHORTEN</button>
                    <button type="button" class="btn btn-warning mb-2  mx-2" id="copy">COPY</button>
                </form>
                  
            </div>
            <div class="col-3"></div>
            
        </div>
  )
}



export default Layout
