import {test, expect} from '@playwright/test'                
import { Login } from '../bddone.source/bddone.page/login.page' // importing the class page with its location
test('login process', async({page}) =>
{
    const obj2 = new Login(page)   // creating the objrct
    await obj2.login()                       // using the created object, call the sign in method
})