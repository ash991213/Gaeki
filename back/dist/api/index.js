"use strict";
// import qs from "qs";
// import express from 'express'
// import axios from 'axios'
// const router = express.Router()
//
// const CLIENT_ID = "558081775123-tplut889u1hm5mbq3ok0ffnfh8mto866.apps.googleusercontent.com";
// const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
// const Redirect_uri = "https://localhost:4000"
//
// const queryStr = qs.stringify({
//     client_id: CLIENT_ID,
//     redirect_uri: Redirect_uri,
//     response_type: "token",
//     scope: "https://www.googleapis.com/auth/contacts.readonly",
// });
//
// const loginUrl = AUTHORIZE_URI + "?" + queryStr;
//
// router.get('/auth',(req,res) => {
//     console.log('h1?')
//     res.redirect(loginUrl)
// })
