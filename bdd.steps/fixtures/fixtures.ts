import{test as base} from 'playwright-bdd'
import { Login } from '../../bddone.source/bddone.page/login.page'

type allStepClass={
Login:Login;

}

export const test=base.extend<allStepClass>({
    Login: async({page}, use)=>{await use(new Login(page));}
    })

