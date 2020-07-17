// plugins/amplify.js
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(AmplifyPlugin, AmplifyModules)
