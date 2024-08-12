import { BrowserContext, Page, Locator, expect } from '@playwright/test';
import {data} from"../../bddone.testdata/login";
const { Promise } =require('dns');
const{chromium}=require('playwright')
export class Login{

    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;
    url:string;
    text:Locator;
    constructor(page:Page){
        this.page=page;
        this.username=this.page.locator('[name="username"]').nth(0);
        this.password=this.page.locator('[name="password"]').nth(0);
        this.loginButton=this.page.locator('[value="submit"][id="btnSubmit"][class="btn btn-primary btn-login mb-3"]').nth(0)
        this.url='https://adaptiveqat.caresoftglobal.com/';
        this.text=this.page.locator('[type="button"]').getByText('Add Work Package')
    }

    public async login(){
    await this.page.goto(this.url);
    await this.username.fill(data.username);//test data picked from test data file
    await this.password.fill(data.password);
    //await expect(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.com/') //hard assertion
    //await expect.soft(this.page).toHaveURL('https://adaptiveqat.caresoftgloba.com/') //Soft assertion 
    await this.page.pause();
    //await this.username.fill('101479');
    //await this.page.waitFor({state:'visible'})
    //await this.page.waitForTimeout(3500);
    //await this.password.fill('mypassword');
    await this.password.press('Enter');
    //await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded') //wait until page loading with all elements in page
    this.loginButton=this.page.getByRole('button')
    await this.page.getByRole('link', { name: '' }).click();
    await this.page.locator('#ddlmultitenantlist').getByText('Tech Pub').click();
    await this.page.waitForLoadState('domcontentloaded')
    
    //to click and open in a seperate tab of same browser
    const page3Promise = this.page.waitForEvent('popup');
    //await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dblclick();
    //await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick');
    //await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick'); with actual locator and dispatch
    await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick'); // dispatch hard click when required
    const page3 = await page3Promise;
    await page3.getByText('Work Flow', { exact: true }).click();
    await expect(page3.locator('#spnWorkPackageNameAndPartNumber')).toContainText('Work Flow');
    await this.page.pause();
    
   /*//-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8--8-8-8-8-8-8
    await this.page.waitForTimeout(3000)
    await this.page.locator('[class="list-link link-arrow up currentpage"]').click(); //navigate to Sample tech pub
    await this.page.locator('[class="list-link currentpage"]').nth(0).click(); //Navigate to sample work assignment
    await this.page.pause();
    await this.page.locator('[buttonid="59E4DC91-DF24-402A-AC70-E0C6169C2EE0"]').click();
    await this.page.pause();
    await this.page.locator('input[type="file"]').nth(0).setInputFiles('C:\\Users\\101479\\Fileupload.csv');
    await this.page.pause();
//-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8--8-8-8-8-8-8
*/

/*// 0-0-0--0-0-0-0-0-0-0

    await this.page.locator('[type="button"]').getByText('Add Work Package').click();
    await expect(this.text).toContainText('Add Work Package'); //non-retry
    console.log('text')
    
    await this.page.locator('#WorkPackage').getByRole('heading', { name: 'Work Package' }).click();    
    console.log("Able to open work package window to add a New work package");
    //await this. page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]', { name: '7' }).click();
    await this.page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]').fill('07-Aug-2024');
    
    
    //For drag drop//await this.page..setInputFiles('path/to/file/in/playwright/folder)
    await this.page.locator('[class="btn  btn-outline-secondary"]').click();
    await this.page.pause();
    //await this.page.locator('[id="fileUpload_browse"]').click();
    //await this.page.pause();
    await this.page.waitForTimeout(3000) //Wait statement
    await this.page.getByRole('link').filter({hasText:'Add Files'}).setInputFiles('C:/Users/101479/Fileupload.csv');  //click the file upload as it is a link button
    await this.page.pause();
    await this.page.locator('[name="Project location"]').selectOption("Coimbatore")
    
    //await this. page.getByRole('textbox', { name: 'HHH' }).click();
    await this. page.getByRole('textbox', { name: 'HHH' }).dragTo;

    await this. page.getByRole('textbox', { name: 'HHH' }).fill('2');
    await this. page.locator('[name="Input Folder Path"]').nth(0).fill('Input folder path Prabha');
    await this.page.pause();
    await this. page.locator('[role="textbox"][class="select2-selection__rendered"][title="Select BESS POC"]').click();
    await this.page.locator('[name="Tpdomain"]').selectOption("TPB");
    await this.page.pause()
    //await this.page.locator('[class="select2-selection__rendered"]').getByRole('textbox', { name: 'Select Masterlist a' })
    
    const dropdown = await this.page.$$('[class="select2-selection__rendered"]')
    
    let dropdowntwo=dropdown.length
    console.log (dropdown.length) //to pring the element le
        for(const element of dropdown){
            //while(await element.isVisible()==false)  
            
            const text = await element.textContent()                       
            if(text=='Select Masterlist a')
                    {   
                    await this. page.locator('[class="form-label"][id="WorkPackage_OnBehalfofUser"]').click();  
                    this.page.keyboard.down('PageDown')
                    await element.click()
                    await this.page.pause();
                    break;  
        }
    




    // 0-0-0--0-0-0-0-0-0-0

*/




    // await this.page.getByRole('button', { name: ' Draft' }).click();
    // await this.page.locator('[role="dialog"][class="swal-modal"]').getByText("Form Values Drafted Successfully").isVisible();
    // await this.page.pause();
    // await this. page.getByRole('button', { name: 'OK' }).click();


    // //Handson //dropdown values assert ($operator)
    // await this.page.pause();
    
    
    // if (!dropdown) {
    //     throw new Error('Dropdown element not found');
    // }
    // await dropdown.selectOption({ label: 'Coimbatore' });
    
    //  // Assert the selected value in the dropdown
    // await expect(dropdown).not.toHaveProperty('#Coimbatore');
    // await this.page.pause();
    
    //const dropdown = await page.$('#dropdownId');
    
    //await expect(this.page.locator('[name="Project location"]')).toHaveValue("Coimbatore");
    // await this.page.goto(this.url);

    //await expect(this.page.locator('span').filter({ hasText: 'Tech Pub' })).toBeVisible();
    //await this.page.pause();
    //await this.page.locator('.submit-button');
    

    // await this.page.pause();
    // await this. page.getByRole('option', { name: 'TPB' }).click();
    // await this.page.pause();
    // await this.page.getByRole('button', { name: ' Draft' }).click();
    // await this.page.pause();    
    // await this.page.locator('[role="dialog"][class="swal-modal"]').getByText("Form Values Drafted Successfully").isVisible();
    //*************************************************** */
    // await this.page.locator('#dp1722907397258').click();
    // await this. page.getByRole('link', { name: '7' }).click();
    // await this. page.getByRole('textbox', { name: 'Select Project location' }).click();
    // await this. page.getByRole('option', { name: 'Coimbatore', exact: true }).click();
    // await this. page.getByRole('textbox', { name: 'MM', exact: true }).click();
    // await this. page.getByRole('textbox', { name: 'MM', exact: true }).press('Home');
    // await this. page.getByRole('textbox', { name: 'HHH' }).click();
    // await this. page.getByRole('textbox', { name: 'HHH' }).press('ArrowLeft');
    // await this. page.getByRole('textbox', { name: 'HHH' }).fill('02');
    // await this. page.getByRole('textbox', { name: 'HHH' }).press('Tab');
    // await this. page.getByRole('textbox', { name: 'Input Folder Path' }).click();
    // await this. page.getByRole('textbox', { name: 'Input Folder Path' }).click();
    // await this. page.getByRole('option', { name: 'TPB' }).click();
    // await this. page.locator('.bootstrap-tagsinput > input').first().click();
    // await this. page.locator('.bootstrap-tagsinput > input').first().fill('prabhakara@caresoftglobal.com');
    // await this. page.locator('#dp1722907397261').click();
    // await this. page.getByRole('link', { name: '9' }).click();
    // await this. page.getByPlaceholder('Text Input', { exact: true }).click();
    // await this. page.getByPlaceholder('Text Input', { exact: true }).fill('Text input Prabha');
    // await this. page.getByRole('textbox', { name: 'Select Primary Onsite' }).click();
    // await this. page.getByRole('option', { name: '- Suresh Lingamurthy' }).click();
    // await this. page.locator('div:nth-child(52) > div > .multi-inputtag > .bootstrap-tagsinput > input').click();
    // await this. page.locator('div:nth-child(52) > div > .multi-inputtag > .bootstrap-tagsinput > input').fill('passionprabha@gmail.com');
    // await this. page.locator('div:nth-child(52) > div > .multi-inputtag > .bootstrap-tagsinput > input').press('Tab');
    // await this. page.getByLabel('Select Secondary onsite').click();
    // await this. page.getByRole('searchbox').nth(3).click();
    // await this. page.getByRole('searchbox').nth(3).fill('raj');
    // await this. page.getByRole('option', { name: 'F98212B - A NATARAJAN' }).click();
    // await this. page.getByRole('textbox', { name: 'Select Account manager' }).click();
    // await this. page.getByRole('option', { name: 'F71802A - A ANANDAKUMAR' }).click();
    // await this. page.getByRole('textbox', { name: 'Select User-Location' }).click();
    // await this. page.getByRole('option', { name: 'Coimbatore', exact: true }).click();
    // await this. page.getByRole('textbox', { name: 'Select Test_USERS' }).click();
    // await this. page.getByRole('option', { name: '- Boobalan Govindasamy' }).click();
    // await this. page.locator('#WorkPackage span').filter({ hasText: 'Add Accessible GroupComment' }).getByRole('button').click();
    // await this. page.getByRole('button', { name: 'Comment Accessible Group' }).click();
    // await this. page.getByPlaceholder('Auto complete2').click();
    // await this. page.getByPlaceholder('Auto complete2').fill('Au');
    // await this. page.locator('#ulDDRlist').getByText('AUCKLAND').click();
    // await this. page.getByRole('textbox', { name: 'Select Masterlist a' }).click();
    // await this. page.getByRole('option', { name: 'Connector location loading' }).click();
    // await this. page.getByRole('button', { name: 'None selected' }).click();
    // await this. page.getByRole('button', { name: 'PCA' }).click();
    // await this. page.locator('.panel-body').first().click();
    // await this. page.getByRole('button', { name: ' Draft' }).click();
    // await this.page.pause();
    // await this. page.getByRole('button', { name: 'OK' }).click();
    // await this.page.pause();
    // await this. page.getByRole('link', { name: '' }).click();
    // await this.page.pause();
    // await this. page.getByRole('heading', { name: 'Adaptive Service Management' }).click();
    // await this.page.pause();

    //*************************************************** */

    
    /*const checkbox= await this.page.locator('[class="form-check-label w-100"]').getByText("CNHi10549C00-BI- Tool Development").isChecked()
    if(checkbox){
        const isChecked=await checkbox.ischecked()
        if (!isChecked) {
            await checkbox.check()
        }
    }*/



      
    //------------------------------------------------------------------------------------
    // await this.page.locator('[name="Project location"]').selectOption("Chennai")
    
    // await this.page.getByRole('button', { name: ' Draft' }).isChecked;
    
    // await this.page.locator('[role="dialog"][class="swal-modal"]').getByText("Form Values Drafted Successfully").isVisible();
    
    //await this.page.locator('abc'.press('Enter')) //>> to press enter button

    // //await this.page.pause();

    /*  await page.goto('https://adaptiveqat.caresoftglobal.com/');
  
  await page.getByPlaceholder('User ID / Email ID').click();
  await expect(page.getByPlaceholder('User ID / Email ID')).toBeEmpty();
  await expect(page.getByRole('heading')).toContainText('Adaptive Service Management Platform');
  await expect(page.locator('body')).toContainText('User ID / Email ID Password External Login SIGN IN');
  await expect(page.getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'SIGN IN', exact: true }).click();
  await page.getByRole('link', { name: 'Forgot Password' }).click();
  await page.getByText('00:00 Adaptive Service').click();
  await expect(page.getByText('00:00 Adaptive Service')).toBeVisible();
  await expect(page.getByRole('img')).toBeVisible();
  */


    }
    }
