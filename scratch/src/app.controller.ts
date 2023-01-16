import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {

    @Get('/hello')
    getRootRoute() {
        return 'OLA MUNDO!';
    }
}

export default AppController