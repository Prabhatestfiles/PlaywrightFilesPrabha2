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
    techpuppage: string;
    text:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=this.page.locator('[name="username"]').nth(0);
        this.password=this.page.locator('[name="password"]').nth(0);
        this.loginButton=this.page.locator('[value="submit"][id="btnSubmit"][class="btn btn-primary btn-login mb-3"]').nth(0)
        this.url='https://adaptiveqat.caresoftglobal.com/';
        this.techpuppage='https://adaptiveqat.caresoftglobal.com/DynamicPage?pageID=59596403-B0E3-4FC0-A70F-90E35F64E84A';
        this.text=this.page.locator('[type="button"]').getByText('Add Work Package')
    }

    public async login(){
    await this.page.goto(this.url);

    // test data picked from test data file
    await this.username.fill(data.username);
    //console.log("username used for this login is ", $'{this.username}');
    
    // To check attribute is not disabled
    await expect.soft(this.password).not.toBeDisabled();
    await this.password.fill(data.password);

    // Keyboard action keys using : enter Key used
    await this.password.press('Enter');

    // wait until page loading with all elements in page
    await this.page.waitForLoadState('domcontentloaded') 

    await this.page.pause();
    
    // to check page response code for 200
    this.page.on('response', async response =>{
        if(response.url()===this.techpuppage){
            expect(response.status()).toBe(200);
        }
    });
    await this.page.goto(this.techpuppage);
    console.log("url response is verified as 200, it is OK");
    await this.page.pause();
    

    //to check page title
    const title = await this.page.title();
    await this.page.waitForTimeout(3000)
    expect(title).toBe('Dynamic APP - QA');
    console.log("page title is verified as ***  Dynamic APP - QA  ***");

    // hard assertion
    //await expect(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.com/') 

    // Soft assertion 
    //await expect.soft(this.page).toHaveURL('https://adaptiveqat.caresoftgloba.com/') 

    // Pause statement
    await this.page.pause();



    // GetByRole selector for element identification 
    this.loginButton=this.page.getByRole('button')

    // GetByRole for a link
    await this.page.getByRole('link', { name: '' }).click();

    // GetByText selector for element identification 
    await this.page.locator('#ddlmultitenantlist').getByText('Tech Pub').click();
    await this.page.waitForLoadState('domcontentloaded')
    
    //to click and open in a seperate tab of same browser
    //Wait for event 
    const page3Promise = this.page.waitForEvent('popup');
    
    
    // with actual locator and dispatchevent
    // await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick');
    
    // dispatch hard click when required
    // double click on row and open second tab in window, access and check for element in second tab
    await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick'); 
    const page3 = await page3Promise;
    await page3.getByText('Work Flow', { exact: true }).click();
    await expect(page3.locator('#spnWorkPackageNameAndPartNumber')).toContainText('Work Flow');
        
    // Wait for with time 3 seconds
    await this.page.waitForTimeout(3000)
    await this.page.locator('[class="list-link link-arrow up currentpage"]').click(); //navigate to Sample tech pub
    await this.page.locator('[class="list-link currentpage"]').nth(0).click(); //Navigate to sample work assignment
    await this.page.waitForTimeout(3000)


    await this.page.locator('[buttonid="59E4DC91-DF24-402A-AC70-E0C6169C2EE0"]').click();
    await this.page.waitForTimeout(3000)

    //File upload in a pop-up -adding attachment
    await this.page.locator('input[type="file"]').nth(0).setInputFiles('C:\\Users\\101479\\Fileupload.csv');
    
    await this.page.waitForTimeout(3000)
    await this.page.goto(this.techpuppage);
    await this.page.waitForTimeout(3000)
    await this.page.locator('[type="button"]').getByText('Add Work Package').click();
    
    //non-retry assertions
    await expect(this.text).toContainText('Add Work Package'); 
    
    //Print a statement
    console.log('text')
    
    await this.page.locator('#WorkPackage').getByRole('heading', { name: 'Work Package' }).click();    
    console.log("Able to open work package window to add a New work package");
    //await this. page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]', { name: '7' }).click();

    //To check date picker is enabled or not and Fill Date
    await expect(this.page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]')).toBeEnabled();
    await this.page.locator('[placeholder="DD-MMM-YYYY"][tabindex="15"]').fill('07-Aug-2024');
    
    
    //For drag drop//await this.page..setInputFiles('path/to/file/in/playwright/folder)
    //await this.page.locator('[class="btn  btn-outline-secondary"]').click();
    
    //Wait statement with 3 seconds
    await this.page.waitForTimeout(1000) 
    
    //click the file upload as it is a link button -attachment
    //await this.page.getByRole('link').filter({hasText:'Add Files'}).setInputFiles('C:/Users/101479/Fileupload.csv'); 
    
    //selecting dropdown with select option
    await this.page.locator('[name="Project location"]').selectOption("Coimbatore")
    
    await this. page.getByRole('textbox', { name: 'HHH' }).click();
    
    //Wait for element with specific selector
    //await this.page.waitForSelector('textbox', (name: 'HHH')), {state: 'visible'}; To do: cannot use element for visible
    //await expect(this.page.getByRole('textbox', { name: 'HHH' })).toBeVisible();
    //console.log("wait for element : Pass Element is visible");

    //await this. page.getByRole('textbox', { name: 'HHH' }).dragTo; TODOOOOOOOOOOOO

    await this. page.getByRole('textbox', { name: 'HHH' }).fill('2');
    await this. page.locator('[name="Input Folder Path"]').nth(0).fill('Input folder path Prabha');
    await this.page.waitForTimeout(3000)
    await this. page.locator('[role="textbox"][class="select2-selection__rendered"][title="Select BESS POC"]').click();
    await this.page.locator('[name="Tpdomain"]').selectOption("TPB");
    await this.page.waitForTimeout(3000)
    //await this.page.locator('[class="select2-selection__rendered"]').getByRole('textbox', { name: 'Select Masterlist a' })
    
    //To locate an elment with $$ for picking one value from dropdown
    //For loop with If statement 
    const dropdown = await this.page.$$('[class="select2-selection__rendered"]')
    
    let dropdowntwo=dropdown.length
    
    //to print the element length
    console.log (dropdown.length) 
        for(const element of dropdown){
            //while(await element.isVisible()==false)  
            
            const text = await element.textContent()                       
            if(text=='Select Masterlist a')
                    {   
                    await this. page.locator('[class="form-label"][id="WorkPackage_OnBehalfofUser"]').click();  
    
    // To Bring the page down -Scrolling for an attribute               
                    this.page.keyboard.down('PageDown')
                    await element.click()
                    await this.page.pause();
    console.log("----------------- Test completed ----------------- ");
    
    // Break statement
                    break;  
    
        }

    }
    }}