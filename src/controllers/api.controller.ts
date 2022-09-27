import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

@Controller()
export class ApiController {
  @Get('/feature')
  @HttpCode(HttpStatus.OK)
  async feature() {
    return [
      {
        name: 'BOILERPLATEACCESS',
        pretty_name: 'Permissão de Acesso',
        description: 'O usuário pode acessar o módulo GSE',
      },
    ];
  }
}