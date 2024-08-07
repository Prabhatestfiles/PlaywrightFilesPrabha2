import { createBdd } from "playwright-bdd";
import {test} from './fixtures/fixtures';
import { Login } from "../bddone.source/bddone.page/login.page"; //Not required
const {Given, When, Then}=createBdd(test)

Then("Login", async({Login})=>{
    await Login.login();
})




//Then("Login"), async({loginPage})=>{  //as async, we need call back=>
