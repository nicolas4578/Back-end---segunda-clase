import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PartialGraphHost } from '@nestjs/core';
import { Param } from '@nestjs/common';
@Controller('bootcamps')
export class BootcampsController {
    @Get()
    getallBootcamps(): string{
        return "aqui se mostrara todos los bootcamps"
    }
    @Get(":id")
    getBootcampById(@Param('id')id:string ): string {
        return `aqui se va a mostrar el bootcamp con id ${id}`
    }

    @Post()
    createBootcamp(): string{
        return"aqui se va a crear bootcamps";
    }

    @Put(":id")
    updateBootcamp(@Param('id') id:string ): string{
        return `aqui se va a actualizar un bootcamp ${id}`;
    }
    @Delete(":id")
    deleteBootcamp(@Param('id') id:string): string {
        return  `aqui se va a eliminar un bootcamp ${id}`
    }

}
