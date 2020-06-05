import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController{

    async index(request: Request, response: Response){
        //cidade, uf, items (Query Params)
        const { city, uf, items } = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items',  'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        return response.json({points});

    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();
        console.log(point)
        if (!point) {
           return response.status(400).json({ message: 'Point not found.' });
        }

        const items =  await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id',  id)
            .select('items.title');

        return response.json({ point,  items });
        
    }

    async create(request: Request, response: Response){
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        const trx = await knex.transaction();

        const point = {
          image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fw3css%2Fimg_lights.jpg&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fw3css%2Fw3css_images.asp&tbnid=kwgHAQqTiLQXLM&vet=12ahUKEwiZ48idqunpAhVLBLkGHfj1A8IQMygBegUIARDHAQ..i&docid=R0KnAtfyBDsyiM&w=600&h=400&q=image&client=opera-gx&ved=2ahUKEwiZ48idqunpAhVLBLkGHfj1A8IQMygBegUIARDHAQ",
          name,
          email,
          whatsapp,
          latitude,
          longitude,
          city,
          uf,
        };

        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
           return {
               item_id,
               point_id,
           };
     });

        await trx('point_items').insert(pointItems);
        await trx.commit();

        return response.json({ 
            id:point_id,
            ...point,
         });
    };
}
export default PointsController;