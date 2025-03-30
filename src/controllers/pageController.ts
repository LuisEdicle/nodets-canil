
import { Request, Response } from "express";

import {Pet} from '../models/pet';
import { createMenuObject } from '../helpers/creatMenuObject'

export const home = (req: Request, res: Response) => {

    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
} 

export const dogs = (req:Request, res:Response)=>{

    let list = Pet.getFromType("dog");

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        }, 
        list
    });
} 

export const cats = (req:Request, res:Response)=>{

    const list = Pet.getFromType("cat");

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
} 

export const fish = (req:Request, res:Response)=>{
    const list = Pet.getFromType("fish");
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title: 'Todos os Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
} 