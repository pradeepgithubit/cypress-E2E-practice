import {registerPage} from "../../pages/registerPage"
const registerObj = new registerPage()

import registerData from '../../fixtures/registerData.json'

describe(' Automation script for Register Form ',()=>{

    it('Register Flow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephoneNo(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPassword(registerData.passwordConfirm)
        //registerObj.selectSubscribe()
        registerObj.selectCheckbox()
        registerObj.clickContinue()

    })
})