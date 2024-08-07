import { BrowserContext, Page, Locator, expect } from '@playwright/test';
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
    await expect(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.com/') //hard assertion
    await expect.soft(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.com/') //Soft assertion 
    await this.page.pause();
    await this.username.fill('101479');
    //await this.page.waitFor({state:'visible'})
    //await this.page.waitForTimeout(3500);
    await this.password.fill('Nilani@@1');
    await this.password.press('Enter');
    //await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded') //wait until page loading with all elements in page
    this.loginButton=this.page.getByRole('button')
    await this.page.pause();
    await this.page.getByRole('link', { name: '' }).click();
    await this.page.locator('#ddlmultitenantlist').getByText('Tech Pub').click();
    await this.page.pause();
    await this.page.locator('[type="button"]').getByText('Add Work Package').click();
    await expect(this.text).toContainText('Add Work Package'); //non-retry
    console.log('text')
    
    await this.page.locator('#WorkPackage').getByRole('heading', { name: 'Work Package' }).click();    
    console.log("Able to open work package window to add a New work package");
    //await this. page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]', { name: '7' }).click();
    await this.page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]').fill('07-Aug-2024');
    
    await this.page.locator('[name="Project location"]').selectOption("Coimbatore")
    
    await this. page.getByRole('textbox', { name: 'HHH' }).click();
    await this. page.getByRole('textbox', { name: 'HHH' }).fill('2');
    await this. page.locator('[name="Input Folder Path"]').nth(0).fill('Input folder path Prabha');
    await this.page.pause();
    await this. page.locator('[role="textbox"][class="select2-selection__rendered"][title="Select BESS POC"]').click();
    await this. page.locator('[role="textbox"][class="select2-selection__rendered"][title="Select BESS POC"]').click();
    await this.page.pause();
    await this.page.locator('[name="Tpdomain"]').selectOption("TPB");
    await this.page.pause()
    await this.page.getByRole('button', { name: ' Draft' }).click();
    await this.page.locator('[role="dialog"][class="swal-modal"]').getByText("Form Values Drafted Successfully").isVisible();
    await this.page.pause();
    await this. page.getByRole('button', { name: 'OK' }).click();


    // //Handson //dropdown values assert ($operator)
    // await this.page.pause();
    // const dropdown = await this.page.$('[name="Project location"]')
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

    




      
    //------------------------------------------------------------------------------------
    // await this.page.locator('[name="Project location"]').selectOption("Chennai")
    
    // await this.page.getByRole('button', { name: ' Draft' }).isChecked;
    
    // await this.page.locator('[role="dialog"][class="swal-modal"]').getByText("Form Values Drafted Successfully").isVisible();
    
    //await this.page.locator('abc'.press('Enter')) //>> to press enter button

    // //await this.page.pause();
    
    }
    }


    

   
