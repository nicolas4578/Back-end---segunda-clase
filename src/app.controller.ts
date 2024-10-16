import { Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endpoint: Puerta de software
  //Acepta peticiones de cientes bajo una URL semantica
  //Retornar el(los) esperados al cliente

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Segundo Endpoint - ESTRUCTURAR UN ENDPOINT
  //1. verbo(metodo) HTTP sobre el cual recibir la peticion}
  //  metodos disponibles: GET, POST, PUT, DELETE
  //  junto con la ruta a invocar
  // 2. Firma del metodo a ejecutar
  //    cuando se invoque el endpoint
  //
  @Get("/ficha")
  getFicha(): string {
    return "endpoint de la ficha 2902093"

  }

  //tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param('id')id:string,
                @Param('ciudad') ciudad:string,
                @Query('nombre') nombre:string,
                @Query('edad') edad:number ):Student {
    return  new Student(+id, nombre, edad, ciudad);
  
  }

}

